import { useContext } from "react";
import { Logo } from "../atoms/icons/logo";
import styled from "styled-components";
import { HeaderLink } from "../atoms/typography"
import { MaxWidth } from "../atoms/base/global";
import { QuestionsContext } from "../../contexts/QuestionsContext";

const Wrapper = styled.nav`
    background-color: rgba(60,100,177, 0.06);
    padding: 2.8rem;
`;
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Navbar = () => {
    const { questions } = useContext(QuestionsContext);
    return (
        <Wrapper>
            <MaxWidth>
                <InnerWrapper>
                    <LogoWrapper>
                        <Logo />
                        <p>MYQUIZ</p>
                        <p>{questions.length}</p>
                    </LogoWrapper>
                    <div>
                        <HeaderLink href="/">Home</HeaderLink>
                        <HeaderLink href="/get-started">Take Quiz</HeaderLink>
                        <HeaderLink href="/go">Contact</HeaderLink>
                        <HeaderLink href="/go">Help</HeaderLink>
                    </div>
                </InnerWrapper>
               
            </MaxWidth>
            
        </Wrapper>
    )
};