import { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Body2, BButton, Important } from "../atoms/typography";
import { VerticalSpacer } from "../atoms/spacer";
import { SimpleDropdown } from "../molecules/dropdown";
import { SubjectContext } from '../../contexts/SubjectContext';
import { YearContext } from '../../contexts/YearContext';
import { subjectAction } from "../../actions/subject-action";
import { yearAction } from "../../actions/year-action";


const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 35.6rem;
    margin: 0 auto;
`;
const TextAlign = styled.div`
    text-align: left;
`;
const GetQuestions = styled.button`
    border: none;
    button {
        width: 100%;
        height: 5.6rem;
    }
`;

export const ExamDetails = ({ examType, optionOne, optionTwo, history, location }) => {
    const [subjectSelected, setSubjectSelected] = useState("");
    const [error, setError] = useState("");
    const [year, setYear] = useState("");
    const { dispatch } = useContext(SubjectContext);
    const yearDetails = useContext(YearContext);

    return (
        <DropdownWrapper>
            {error && <Body2><Important>{error}</Important></Body2>}
            <Body2>
                <TextAlign>{examType === "Post-UTME" ? "Name of Instituition" : "Select Subject"} <Important>*</Important></TextAlign>
            </Body2>
            <VerticalSpacer size="1.6rem" />
            <SimpleDropdown items={optionOne} setValue={setSubjectSelected} />
            <VerticalSpacer size="7.3rem" />
            <Body2>
                <TextAlign>{examType === "Post-UTME" ? "Course of Study" : "Select Year"} <Important>*</Important></TextAlign>
            </Body2>
            <VerticalSpacer size="1.6rem" />
            <SimpleDropdown items={optionTwo} setValue={setYear} />
            <VerticalSpacer size="5.4rem" />
            <GetQuestions>
                <BButton onClick={() => {
                    if (!subjectSelected || !year) {
                        setError("Please select exam details");
                    }
                    else {
                        setError("");
                        dispatch(subjectAction(subjectSelected));
                        yearDetails.dispatch(yearAction(year));
                        history.push(`${location.pathname}/questions`);
                    }

                }}>GENERATE QUESTIONS</BButton>
            </GetQuestions>
        </DropdownWrapper>
    )
}

export default withRouter(ExamDetails);