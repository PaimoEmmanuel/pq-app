import styled from "styled-components";
import { getColor } from "../../utils/color";
import { Logo } from "../atoms/icons/logo";
import { Body1 } from "../atoms/typography";
import { MaxWidth } from "../atoms/base/global";
import { VerticalSpacer } from "../atoms/spacer";

const FooterWrapper = styled.footer`
    background-color: ${getColor("defaultBlue")};
    padding: 5.6rem 0;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
`;

const FooterFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Footer = () => (
    <FooterWrapper>
        <MaxWidth>
            <FooterFlex>
                <Logo />
                <VerticalSpacer size="8px"/>
                <Body1 color="white">
                    A TechProduct Geared Towards Increasing Academic Excellence In The Community
                </Body1>
                <Body1 color="white">
                    Copyright 2020 PiePsalms - All rights reserved.
                </Body1>
                <Body1 color="white">
                    All trademarks and product names on our website are the property of their respective owners.
                </Body1>
            </FooterFlex>
        </MaxWidth>
    </FooterWrapper>
)