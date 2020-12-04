import styled from "styled-components";
import { HorizontalSpacer, VerticalSpacer } from "../atoms/spacer";
import { QuestionText, Body1 } from "../atoms/typography";

const getAnswerIndex = (option) => {
    switch (option) {
        case "a":
            return 0;
        case "b":
            return 1;
        case "c":
            return 2;
        case "d":
            return 3;
        case "e":
            return 4;
        default:
            break;
    }
};
const getLabelColor = (index, answer, selected) => {   
    if((index === answer)) {
        return 'color: #1EAD1E;';
    }
    if ((index !== answer) && !selected) {
        return ''
    }
    if((index !== answer) && selected) {
        return 'color: #FF0F00;';
    }
};
const Wrapper = styled.div``;
const OptionWrapper = styled.div`
  margin-bottom: 1.9rem;
  margin-left: 5rem;
`;
const QuestionImg = styled.img`
  width: 15rem;
  height: auto;
`;
const QuestionWrapper = styled.div`
  display: flex;
`;
const Label = styled.label`
    // color: ${props => props.answer? "#1EAD1E" : "#FF0F00"};
    ${props => props.answer}
`;
export const Answer = ({
    number,
    question,
    section,
    options,
    image,
    answer,
    radioState,
}) => {
    return (
        <Wrapper>
            {section && <Body1>{section}</Body1>}
            {section && <VerticalSpacer size="2rem" />}
            {image && <QuestionImg src={image} />}
            {image && <VerticalSpacer size="2rem" />}
            <QuestionWrapper>
                <QuestionText>Q{number}</QuestionText>
                <HorizontalSpacer size="2.8rem" />
                <QuestionText>{question}</QuestionText>
            </QuestionWrapper>
            <VerticalSpacer size="4rem" />
            <form>
                {Object.entries(options)
                    .map((x) => x[x.length - 1])
                    .map((option, index) => (
                        <OptionWrapper key={index}>
                            <QuestionText>
                                <input
                                    type="radio"
                                    id={option}
                                    name="option"
                                    checked={radioState[index]}
                                    readOnly
                                    value={option}
                                />
                                <Label htmlFor={option} answer={getLabelColor(index, getAnswerIndex(answer), radioState[index])}>{option}</Label>
                            </QuestionText>
                        </OptionWrapper>
                    ))}
            </form>
        </Wrapper>
    );
};
