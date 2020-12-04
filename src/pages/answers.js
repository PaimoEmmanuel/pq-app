import { useContext } from "react";
import styled from "styled-components";
import { Return } from "../components/atoms/icons";
import { getColor } from "../utils/color";
import { ButtonStyle } from "../components/atoms/typography";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { ExamTypeContext } from "../contexts/examTypeContext";
import { WhiteLayout } from "../components/layouts/white-bg-layout";
import { BgWrapper } from "../components/molecules/bg-wrapper";
import { Answer } from "../components/molecules/answer";
import { HorizontalSpacer } from "../components/atoms/spacer";

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
  width: fit-content;
  margin: 8rem auto;
  &:focus {
    outline: none;
  }
`;
export const AnswersPage = () => {
    const { questions } = useContext(QuestionsContext);
    const { examType } = useContext(ExamTypeContext);
    return (
        <div>
            <BgWrapper></BgWrapper>
            <WhiteLayout
                heading={examType ? examType : "Wassce"}
                user="paimo"
                width="100%"
            >
                <div>
                    {questions.map((questionObject) => {
                        return (
                            <Answer
                            key={questionObject.number}
                                radioState={questionObject.radioState}
                                number={questionObject.number}
                                question={questionObject.question}
                                options={questionObject.options}
                                section={questionObject.section}
                                image={questionObject.image}
                                answer={questionObject.answer}
                            />
                        );
                    })}
                </div>
                <Btn2 href="/">
                    Return Home
                    <HorizontalSpacer size="1.1rem" />
                    <Return />
                </Btn2>
            </WhiteLayout>
        </div>
    );
};
