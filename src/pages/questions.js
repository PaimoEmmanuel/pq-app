import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { WhiteLayout } from "../components/layouts/white-bg-layout";
import { BgWrapper } from "../components/molecules/bg-wrapper";
import { BButton } from "../components/atoms/typography";
import { Question } from "../components/molecules/question";
import { ExamTypeContext } from "../contexts/examTypeContext";
import { SubjectContext } from "../contexts/SubjectContext";
import { YearContext } from "../contexts/YearContext";
import { QuestionNumbers } from "../components/organisms/question-numbers";


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
    const url = `https://questions.aloc.ng/api/q/20?subject=${subject}&year=${year}&type=${examType}`
    const [questions, setQuestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [noOfQuestions, setNoOfQuestions] = useState(5);
    const [index, setIndex] = useState(0);
    const [qNumber, setQNumber ] = useState({})
    let number = index

    console.log(url);
    useEffect(() => {
        fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result);
            setQuestions(result.data);
            console.log(questions);
            // setIsLoaded(true);
        },
        (error) => {
        //   setQuestions("Questions not available");
          console.log(error);
        }
      )
    }, [])
    if(true) {
        let display = questions.slice(noOfQuestions-5, noOfQuestions)
        return (
            <div>
                <BgWrapper></BgWrapper>
                <WhiteLayout heading={examType} user="paimo" width="100%">
                    {/* {display.map((questionObj) => {
                        number++;
                        return (
                        <Question 
                            number={number}
                            question={questionObj.question}
                            options={questionObj.option}
                            section={questionObj.section}
                            image={questionObj.image}
                        />
                    )})} */}
                    {/* <div>omoooo</div> */}
                    <QuestionNumbers questionNo={[1,2,3,4,5,6,7,8,9,10,11]}/>
                    <ButtonWrrapper>
                       <BButton onClick={() => {
                           setIndex(index-5);
                           setNoOfQuestions(noOfQuestions -5);
                       }}>Previous</BButton> 
                       <BButton onClick={() => {
                           setIndex(index + 5);
                           console.log(index);
                           setNoOfQuestions(noOfQuestions+ 5)
                       }}>Next</BButton>
                    </ButtonWrrapper>
                    
                </WhiteLayout>
            </div>
        )
    }
};