import { useContext } from "react";
import styled from "styled-components";
import { HorizontalSpacer, VerticalSpacer } from "../atoms/spacer";
import { QuestionText, Body1 } from "../atoms/typography";
import { QuestionsContext } from "../../contexts/QuestionsContext";
import { setSelectedOption, setRadioState, setUserAnswer } from "../../actions/question-action";

const Wrapper = styled.div`

`;
const OptionWrapper = styled.div`
    margin-bottom: 1.9rem;
    margin-left: 5rem;
`;
const QuestionImg = styled.img`
    width: 15rem;
    height: auto;
`;
const QuestionWrapper = styled.div`
    display: flex
`;
export const Question = ({ number, question, section, options, image, checked, radioState }) => {
    const { dispatch } = useContext(QuestionsContext);
    return (
        <Wrapper>
            {section && <Body1>{section}</Body1>}
            {section && <VerticalSpacer size="2rem" />}
            {image && <QuestionImg src={image} />}
            {image && <VerticalSpacer size="2rem" />}
            <QuestionWrapper>
            <QuestionText>Q{number}</QuestionText>
            <HorizontalSpacer size="2.8rem"/> 
            <QuestionText>{question}</QuestionText>
            </QuestionWrapper>
            <VerticalSpacer size="4rem" />
            <form>
                {
                    Object.entries(options).map(x => x[x.length - 1]).map((option, index) => (
                        <OptionWrapper key={index}>
                            <QuestionText>
                                <input type="radio" id={option} name="option" checked={radioState[index]} value={option}
                                onChange={(e)=> {
                                    dispatch(setRadioState(index, number, true));
                                    dispatch(setSelectedOption(number, e.target.checked));
                                    dispatch(setUserAnswer(number, index ));
                                }} />
                                <label htmlFor={option}>{option}</label>
                            </QuestionText>
                        </OptionWrapper>
                    ))
                }
            </form>
        </Wrapper>
    )
}