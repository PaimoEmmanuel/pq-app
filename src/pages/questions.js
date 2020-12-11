import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { WhiteLayout } from "../components/layouts/white-bg-layout";
import { BgWrapper } from "../components/molecules/bg-wrapper";
import { BButton } from "../components/atoms/typography";
import { Question } from "../components/molecules/question";
import { ExamTypeContext } from "../contexts/examTypeContext";
import { SubjectContext } from "../contexts/SubjectContext";
import { YearContext } from "../contexts/YearContext";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { QuestionNumbers } from "../components/organisms/question-numbers";
import { updateQuestions } from "../actions/question-action";
import { createBrowserHistory } from 'history';
import { Link as RLink, withRouter } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { getColor } from "../utils/color";
let history = createBrowserHistory();

const ButtonWrrapper = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        margin: 0;
        border-radius: 1.5rem
    }
`;
const Link = styled(RLink)`
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
`;
const NumberWrapper = styled.div`
    margin: 15rem 0 0 10rem;
`;
const Flex = styled.div`
    display: flex;
`;

const QWrapper = styled.div`
    width: 65%;
`;
const LoaderWrapper = styled.div`
    height: 80vh;
    & div {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const QuestionsPage = () => {
    const { examType } = useContext(ExamTypeContext);
    const { subject } = useContext(SubjectContext);
    const { year } = useContext(YearContext);
    const { dispatch } = useContext(QuestionsContext);
    const url = `https://questions.aloc.ng/api/q/10?subject=${subject}&year=${year}&type=${examType}`
    const [loadedQuestions, setLoadedQuestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [noOfQuestions, setNoOfQuestions] = useState(5);
    const [index, setIndex] = useState(0);
    const [checked, setChecked] = useState(false);
    const [disable, setDisable] = useState(false);

    console.log(url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setLoadedQuestions(result.data);
                    setIsLoaded(true);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    const store = loadedQuestions.map((loadedQuestion, index) => {
        return {
            status: false,
            number: index + 1,
            question: loadedQuestion.question,
            options: loadedQuestion.option,
            answer: loadedQuestion.answer,
            selected: "",
            radioState: [false, false, false, false, false],
            userAnswer: "",
            section: loadedQuestion.section,
            image: loadedQuestion.image,
        }
    });
    useEffect(() => {
        dispatch(updateQuestions(store));
    }, [loadedQuestions]);
    const { questions } = useContext(QuestionsContext);
    
    if (!isLoaded) {
        return (
            <LoaderWrapper>
            <BarLoader loading={!isLoaded} color={getColor("defaultBlue")}/>
            </LoaderWrapper>
        )
    }
    let display = questions.slice(noOfQuestions - 5, noOfQuestions)
        console.log(display);
        return (
            <div>
                <BgWrapper></BgWrapper>
                <WhiteLayout heading={examType} user="paimo" width="100%">
                    <Flex>
                        <QWrapper>
                            {display.map((questionObject) => {
                                return (
                                    <Question
                                        key={questionObject.number}
                                        radioState={questionObject.radioState}
                                        number={questionObject.number}
                                        question={questionObject.question}
                                        options={questionObject.options}
                                        section={questionObject.section}
                                        image={questionObject.image}
                                    />
                                )
                            })}

                        </QWrapper>
                        <NumberWrapper>
                            <QuestionNumbers questionNo={questions} />
                        </NumberWrapper>
                    </Flex>


                    <ButtonWrrapper>
                        <BButton
                            disabled={disable}
                            onClick={(e) => {
                                if (questions[0] === display[0]) {
                                    setDisable(true);
                                    // e.target;
                                } else {
                                    setIndex(index - 5);
                                    setNoOfQuestions(noOfQuestions - 5);
                                }
                            }}>Previous</BButton>
                        <BButton onClick={() => {
                            if (questions[questions.length - 1] === display[display.length - 1]) {
                                console.log(history);
                                // history.push("done");
                                console.log('skiboooooo');
                            }
                            else {
                                console.log(history);
                                setIndex(index + 5);
                                console.log(index);
                                setNoOfQuestions(noOfQuestions + 5);
                                setChecked(!checked);
                                console.log(questions);
                            }
                        }}><Link to={questions[questions.length - 1] === display[display.length - 1] && "/done"}>Next</Link></BButton>
                    </ButtonWrrapper>
                </WhiteLayout>
            </div>
        )
};

export default withRouter(QuestionsPage);