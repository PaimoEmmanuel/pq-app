// import { useState } from "react"
import styled from "styled-components";
import { getColor } from "../utils/color";
import { subjects, years } from "../utils";
import { HeadLine2, Body2, Body3, Button } from "../components/atoms/typography";
import { MaxWidth } from "../components/atoms/base/global";
import { VerticalSpacer } from "../components/atoms/spacer";
import Background from "../assets/images/get-started-bg.jpg";
import { ExamDetails } from "../components/organisms/exam-details";

const WhiteBg = styled.div`
    background-color: ${getColor("white")};
    border-radius: 12.15rem;
    padding: 2.4rem 10rem;
    width: ${props => props.width ? props.width : "fit-content"};
    margin: 0 auto;
`;
const Wrapper = styled.div`
    z-index: -1;
    position: absolute;
    height: 72rem;
    width: 100%;
    background-image: linear-gradient(180deg, rgba(60, 100, 177, 0.6) 0%, rgba(236, 239, 245, 0.5) 100%), url(${Background});
    background-size: cover;
    margin-bottom: -4rem;
`;

const OffWhiteBg = styled.div`
    position: fixed;
    z-index: -99;
    background-color: ${getColor("offWhite")};
    height: 100vh;
    width: 100%;
`;



export const SelectSubject = ({ match }) => {

    return (
        <div>
            <Wrapper></Wrapper>
            <OffWhiteBg></OffWhiteBg>
            <MaxWidth>
                <WhiteBg>
                    <HeadLine2>ID: {match.params.id}</HeadLine2>
                </WhiteBg>
                <WhiteBg>
                    <Body2>email</Body2>
                </WhiteBg>
                <WhiteBg width="100%">
                    <VerticalSpacer size="6.7rem" />
                    <Body3 color="defaultBlue">Enter details below</Body3>
                    <VerticalSpacer size="6.2rem" />
                    <ExamDetails examType="WaSSCE" optionOne={subjects} optionTwo={years} />
                    <VerticalSpacer size="5.4rem"/>
                    <VerticalSpacer size="19rem" />
                </WhiteBg>
                <VerticalSpacer size="5rem" />
            </MaxWidth>
        </div>
    )
}