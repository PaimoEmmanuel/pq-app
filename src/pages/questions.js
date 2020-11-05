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


const ButtonWrrapper = styled.div`
    display: flex;
    justify-content: space-between;
    button {
        margin: 0;
        border-radius: 1.5rem
    }
`;

export const QuestionsPage = () => {
    const { examType } = useContext(ExamTypeContext);
    const { subject } = useContext(SubjectContext);
    const { year } = useContext(YearContext);
    const { dispatch } = useContext(QuestionsContext);
    const url = `https://questions.aloc.ng/api/q/10?subject=${subject}&year=${year}&type=${examType}`
    const [loadedQuestions, setLoadedQuestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);
    const [noOfQuestions, setNoOfQuestions] = useState(5);
    const [index, setIndex] = useState(0);

    console.log(url);
    useEffect(() => {
        fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
            setLoadedQuestions(result.data);
        },
        (error) => {
          console.log(error);
        }
      )
    }, []);

    const store = loadedQuestions.map((loadedQuestion, index) => {
        return {
            status: false,
            number: index+1,
            question: loadedQuestion.question,
            options: loadedQuestion.option,
            answer: loadedQuestion.answer,
            selected: "",
            section: loadedQuestion.section,
            image: loadedQuestion.image
        }
    });
    useEffect(() => {
        dispatch(updateQuestions(store));
    }, [loadedQuestions]);
    const { questions } = useContext(QuestionsContext);
    if(isLoaded) {
        let display = questions.slice(noOfQuestions-5, noOfQuestions)
        console.log(display);
        return (
            <div>
                <BgWrapper></BgWrapper>
                <WhiteLayout heading={examType} user="paimo" width="100%">
                   {display.map((questionObject) => {
                        return (
                        <Question 
                            setCheckState={(e) => {console.log(e);}}
                            number={questionObject.number}
                            question={questionObject.question}
                            options={questionObject.options}
                            section={questionObject.section}
                            image={questionObject.image}
                        />
                        )})}
                    {/* <div>omoooo</div> */}
                    <QuestionNumbers questionNo={questions}/>
                    <ButtonWrrapper>
                       <BButton onClick={() => {
                           setIndex(index-5);
                           setNoOfQuestions(noOfQuestions -5);
                       }}>Previous</BButton> 
                       <BButton onClick={() => {
                           setIndex(index + 5);
                           console.log(index);
                           setNoOfQuestions(noOfQuestions+ 5);
                           console.log(questions);
                       }}>Next</BButton>
                    </ButtonWrrapper>
                    
                </WhiteLayout>
            </div>
        )
    }
};