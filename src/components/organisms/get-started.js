import { useState, useContext } from "react";
import styled from "styled-components";
import { HeadLine2, Body1, BButton } from "../atoms/typography";
import { Input } from "../atoms/input";
import { VerticalSpacer } from "../atoms/spacer";
import Background from "../../assets/images/get-started-bg.jpg";
import { UserContext } from "../../contexts/UserContext";
import { userAction } from "../../actions/user-action";
import { withRouter } from "react-router-dom";

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

const ButtonWrapper = styled.div`
    width: 100%;
`;
export const UserForm = (props) => {
    const { user, dispatch } = useContext(UserContext);
    const [userInput, setUserInput] = useState("")
    return (
        <Wrapper>
            <HeadLine2 color="white">Take Quiz</HeadLine2>
            <Body1 color="white">Enter your email address to serve as your userInputname</Body1>
            <VerticalSpacer size="1.1rem" />
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(userAction(userInput));
                
                props.history.push('/select-exam');
            }}>
                <Input type="email" placeholder="email address" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                <VerticalSpacer size="2.2rem" />
                <ButtonWrapper>
                    <BButton type="submit" onClick={(e) => {
                        e.preventDefault();
                        dispatch(userAction(userInput));
                        console.log(userInput);
                        props.history.push('/select-exam');
                    }}>
                        PROCEED
                    </BButton>
                </ButtonWrapper>

            </form>
        </Wrapper>
    )
}
export default withRouter(UserForm);