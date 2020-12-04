import { useContext } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Medal, Search, Return } from "../atoms/icons";
import { ButtonStyle } from "../atoms/typography";
import { VerticalSpacer, HorizontalSpacer } from "../atoms/spacer";
import { getColor } from "../../utils/color";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScoreText = styled.p`
  weight: 700;
  font-size: 4.4rem;
  line-height: 5.6rem;
  letter-spacing: 0.1px;
`;

const Btn1 = styled.button`
  ${ButtonStyle}
  font-size: 2.2rem;
  line-height: 2.4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const Btn2 = styled.a`
  ${ButtonStyle}
  font-size: 2.2rem;
  line-height: 2.4rem;
  color: ${getColor("defaultBlue")};
  background-color: ${getColor("lightGray3")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  display: flex;
  align-items: center;
  &:focus {
    outline: none;
  }
`;

const Complete = ({history, location}) => {
  const {questions} = useContext(QuestionsContext);
  const pointsArray = questions.map(question => question.answer === question.userAnswer ? 1 : 0);
  const score = questions.length ? pointsArray.reduce((a, b) => a + b) : 0;
  return (
    <Wrapper>
        <ScoreText>Your Score</ScoreText>
        <VerticalSpacer size="1.5rem" />
        <Medal />
        <VerticalSpacer size="1.6rem" />
        <ScoreText>{score}</ScoreText>
        <VerticalSpacer size="5rem"/>
        <Btn1 onClick={() => {
          history.push(`${location.pathname}/answers`);
        }}>
            View Answers
            <HorizontalSpacer size="1.1rem" />
            <Search />
        </Btn1>
        <VerticalSpacer size="2rem" />
        <Btn2 href="/">
            Return Home
            <HorizontalSpacer size="1.1rem" />
            <Return />
        </Btn2>
        <VerticalSpacer size="10rem"/>
    </Wrapper>
)};

export default withRouter(Complete)