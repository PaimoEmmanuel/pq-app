import { Logo } from "../atoms/icons/logo";
import styled from "styled-components";
import { NavLink } from "../atoms/typography"

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(60,100,177, 0.06);
    padding: 2.8rem 14.3rem;
`;
const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Navbar = () => (
    <Wrapper>
        <LogoWrapper>
           <Logo />
           <p>MYQUIZ</p>
        </LogoWrapper>
        <div>
            <NavLink to="/go">Home</NavLink>
            <NavLink to="/go">Take Quiz</NavLink>
            <NavLink to="/go">Contat</NavLink>
            <NavLink to="/go">Help</NavLink>
        </div>
    </Wrapper>
);