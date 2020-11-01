import styled from "styled-components";
import { HorizontalSpacer } from "../atoms/spacer";
import { QuestionText } from "../atoms/typography";
const Wrapper = styled.div`

`;
export const Question = ({number, question, options}) => {
    return (
        <Wrapper>
        <QuestionText><span>Q{number}</span><HorizontalSpacer /> {question}</QuestionText>
        <form>
            {options.map(option => (
                <div>
                    <QuestionText>
                    <input type="radio" id={option} name="option" value={option} />
                    <label for={option}>{option}</label>
                    </QuestionText>
                </div>
            ))}
        </form>
        </Wrapper>
    )
}