import styled from "styled-components";
import { HeadLine2, Body1, Button } from "../atoms/typography";
import { MaxWidth } from "../atoms/base/global";
import { getColorRGB } from "../../utils/color";
import { VerticalSpacer } from "../atoms/spacer";

const Wrapper = styled.div`
    background-image: url("./header-bg.png");
    background-size: cover;
    background-color: rgba(${getColorRGB("defaultBlue")}, 0.06);
    height: 56rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const Header = () => (
    <Wrapper>
        <MaxWidth>
            <div>
                <HeadLine2>Start practising now!</HeadLine2>
                <VerticalSpacer size="3.2rem"/>
                <Body1>Here is the smartest online platform that gives you access to past question quizzes that for WASSCE, UTME AND POST UTME </Body1>
                <VerticalSpacer size="5.6rem"/>
                <ButtonWrapper>
                    <Button>Start practice</Button>
                </ButtonWrapper>
            </div>
        </MaxWidth>
       
    </Wrapper>
)