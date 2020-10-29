import { useState } from "react";
import styled from "styled-components";
import { Body2, Button, Important } from "../atoms/typography";
import { VerticalSpacer } from "../atoms/spacer";
import { SimpleDropdown } from "../molecules/dropdown";


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
    a {
        width: 100%;
    }
`;

export const ExamDetails = ({examType, optionOne, optionTwo}) => {
    return (
        <DropdownWrapper>
        <Body2>
            <TextAlign>{examType === "Post-UTME" ? "Name of Instituition" : "Select Subject"} <Important>*</Important></TextAlign>
        </Body2>
        <VerticalSpacer size="1.6rem"/>
        <SimpleDropdown items={optionOne} />
        <VerticalSpacer size="7.3rem" />
        <Body2>
            <TextAlign>{examType === "Post-UTME" ? "Course of Study" : "Select Year"} <Important>*</Important></TextAlign>
        </Body2>
        <VerticalSpacer size="1.6rem"/>
        <SimpleDropdown items={optionTwo} />
        <VerticalSpacer size="5.4rem"/>
        <GetQuestions>
            <Button>GENERATE QUESTIONS</Button>
        </GetQuestions>
        
    </DropdownWrapper>
    )
}