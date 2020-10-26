import { Logo } from "../atoms/icons/logo";
import styled from "styled-components";
import { HeaderLink } from "../atoms/typography"
import { MaxWidth } from "../atoms/base/global";

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
export const Navbar = () => (
    <Wrapper>
        <MaxWidth>
            <InnerWrapper>
                <LogoWrapper>
                    <Logo />
                    <p>MYQUIZ</p>
                </LogoWrapper>
                <div>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/go">Take Quiz</HeaderLink>
                    <HeaderLink to="/go">Contact</HeaderLink>
                    <HeaderLink to="/go">Help</HeaderLink>
                </div>
            </InnerWrapper>
           
        </MaxWidth>
        
    </Wrapper>
);