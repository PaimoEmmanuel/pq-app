import styled from "styled-components";
import { Medal } from "../atoms/icons";
import { HeadLine6, Button } from "../atoms/typography";
import { VerticalSpacer } from "../atoms/spacer";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.8rem;
`;
export const Subject = ({ subject }) => (
    <Wrapper>
        <Medal />
        <HeadLine6>{subject}</HeadLine6>
        <VerticalSpacer size="9px"/>
        <Button>START</Button>
    </Wrapper>
)