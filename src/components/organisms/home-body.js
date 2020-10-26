import styled from "styled-components";
import { Wheel, Wassce, Utme, Putme, Naira, Star, Community } from "../atoms/icons";
import { HeadLine3, HeadLine6, Body1, Body2 } from "../atoms/typography";
import { MaxWidth } from "../atoms/base/global";
import { VerticalSpacer } from "../atoms/spacer";
import { getColorRGB } from "../../utils/color";

const Main = styled.main`

`;

const Section = styled.section`
    text-align: center;
    padding: 8rem 0 10.3rem 0;
`;
const Section2 = styled.section`
    display: flex;
    background-color: rgba(${getColorRGB("offWhite")}, 0.3);
    padding: 4.3rem 0 5.3rem 0;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

const FlexChild = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    &, div {
        margin-right: 5rem;
    }
    &:last-child {
        margin-right: 0;
    }
`;

const Team = styled.div`
    display: flex;
    padding: 12rem 0;
    background-color: rgba(${getColorRGB("offWhite")}, 0.6);
    transform: rotate(-1.58deg);
    margin-bottom: -2rem;
`;
const UndoRotate = styled.div`
    transform: rotate(1.58deg);
`;

export const HomeBody = () => (
    <Main>
        <Section>
            <MaxWidth>
                <Wheel />
                <VerticalSpacer size="2.794rem"/>
                <HeadLine3>
                    Improve your speed and accuracy in attempting quizes.
                </HeadLine3>
                <VerticalSpacer size="2.4rem"/>
                <Body1>
                    We help the world’s academicians to attempt online quizes with provision of answers afterwards.
                </Body1>
            </MaxWidth>
        </Section>

        <Section2>
            <MaxWidth>
                <Flex>
                    <FlexChild>
                        <Wassce />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>WASSCE</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                        </Body2>
                    </FlexChild>

                    <FlexChild>
                        <Utme />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>UTME</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                        </Body2>
                    </FlexChild>

                    <FlexChild>
                        <Putme />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>Post-UTME</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.
                        </Body2>
                    </FlexChild>
                </Flex>
            </MaxWidth>
        </Section2>

        <Section>
            <MaxWidth>
                <Wheel />
                <VerticalSpacer size="2.794rem"/>
                <HeadLine3>
                Our major driving focus
                </HeadLine3>
                <VerticalSpacer size="2.4rem"/>
                <Body1>
                Building great apps for students with unlimited aces to trivial questions of majot exams in Nigeria
                </Body1>
            </MaxWidth>
        </Section>

        <Section2>
            <MaxWidth>
                <Flex>
                    <FlexChild>
                        <Naira />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>Always Free, No Premium</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        We don't show premium content to you while you are trying to find free materials
                        </Body2>
                    </FlexChild>

                    <FlexChild>
                        <Star />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>Commercial Friendly</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        Most materials are useable for your commercial projects without any royalties
                        </Body2>
                    </FlexChild>

                    <FlexChild>
                        <Community />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>Community Powered</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        From me-to-us feature. Share your work, help the community grow and get link attributions
                        </Body2>
                    </FlexChild>
                </Flex>
            </MaxWidth>
        </Section2>

        <Section>
            <MaxWidth>
                <Wheel />
                <HeadLine3>
                Building Team
                </HeadLine3>
            </MaxWidth>
        </Section>

        <Team>
            <MaxWidth>
                <Flex>
                    <FlexChild>
                        <Wassce />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>Paimo emmanuel</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        Frontend Engineer
                        </Body2>
                    </FlexChild>

                    <FlexChild>
                        <Utme />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>Olaniran Samuel</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        UI/UX Designer
                        </Body2>
                    </FlexChild>

                    <FlexChild>
                        <Putme />
                        <VerticalSpacer size="2.794rem"/>
                        <HeadLine6>Paimmas</HeadLine6>
                        <VerticalSpacer size="1.2rem"/>
                        <Body2>
                        Backend Engineer
                        </Body2>
                    </FlexChild>
                </Flex>
            </MaxWidth>
        </Team>

    </Main>
);