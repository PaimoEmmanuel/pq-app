import styled from "styled-components";
import { QuestionNumber } from "../atoms/question-number";

const Wrapper = styled.div`
    width: 22.8rem;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-gap: 1.5rem 0.8rem;
`;
export const QuestionNumbers = ({ questionNo }) => {
    return (
        <Wrapper>
            {questionNo.map((question) => {
                return (
                    <QuestionNumber status={question.status}>
                        {question.number}
                    </QuestionNumber>
                )
            })}
        </Wrapper>
    )
}