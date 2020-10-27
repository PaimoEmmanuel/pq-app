import styled from "styled-components";
import { HeadLine2, Body1, Button} from "../atoms/typography";
import { getColorRGB } from "../../utils/color";
import { Input } from "../atoms/input";
import { VerticalSpacer } from "../atoms/spacer";
import Background from "../../assets/images/get-started-bg.jpg";

const Wrapper = styled.div`
    height: 80vh;
    max-height: 760px;
    background-image: linear-gradient(180deg, rgba(60, 100, 177, 0.6) 0%, rgba(236, 239, 245, 0.5) 100%), url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: -4rem;
`;
export const UserForm = () => {
    return (
        <Wrapper>
            <HeadLine2 color="white">Take Quiz</HeadLine2>
            <Body1 color="white">Enter your email address to serve as your username</Body1>
            <VerticalSpacer size="1.1rem" />
            <Input type="email" placeholder="email address" />
            <VerticalSpacer size="2.2rem" />
            <Button to="select-exam">PROCEED</Button>
        </Wrapper>
    )
}