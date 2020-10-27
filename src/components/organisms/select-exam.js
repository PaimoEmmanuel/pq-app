import styled from "styled-components";
import { HeadLine2, HeadLine6, Body1, Button } from "../atoms/typography";
import { getColor } from "../../utils/color";
import { MaxWidth } from "../atoms/base/global";
import { VerticalSpacer } from "../atoms/spacer";
import { Wassce, Utme, Putme, DownArrow } from "../atoms/icons";
import Background from "../../assets/images/get-started-bg.jpg";

const Wrapper = styled.div`
    z-index: -1;
    position: absolute;
    height: 72rem;
    width: 100%;
    background-image: linear-gradient(180deg, rgba(60, 100, 177, 0.6) 0%, rgba(236, 239, 245, 0.5) 100%), url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: -4rem;
`;

const FlexWrap = styled.div`
    position: relative;
    padding: 24.2rem 0 13rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WhiteBg = styled.div`
    background-color: ${getColor("white")};
    border-radius: 60rem;
    padding: 2.4rem 10rem;
`;
const WhiteBg2 = styled.div`
    background-color: ${getColor("white")};
    border-radius: 60rem;
    width: 100%;
    padding: 2.4rem 10rem;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    & > div {
        margin-right: 5rem;
    }
    &:last-child {
        margin-right: 0;
    }
`;

const FlexChild = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const OffWhiteBg = styled.div`
    position: fixed;
    z-index: -99;
    background-color: ${getColor("offWhite")};
    height: 100vh;
    width: 100%;
`;

const Option = ({examType, icon}) => (
    <FlexChild>
        {icon()}
        <VerticalSpacer size="2.4rem" />
        <HeadLine6>{examType}</HeadLine6>
        <VerticalSpacer size="3.4rem" />
        <Button to={examType}>Start Practice</Button>
    </FlexChild>
)
export const ExamType = () => {
    return (
        <div>
            <Wrapper>
            </Wrapper>
            <OffWhiteBg>
            </OffWhiteBg>
            <MaxWidth>
                <FlexWrap>
                    <WhiteBg>
                        <HeadLine2>Select Exam Type</HeadLine2>
                    </WhiteBg>
                    <VerticalSpacer size="1.5rem" />
                    <DownArrow />
                    <VerticalSpacer size="21.4rem" />
                    <WhiteBg2>
                        <Flex>
                            <Option examType="WASSCE" icon={Wassce}/>
                            <Option examType="UTME" icon={Utme}/>
                            <Option examType="Post-UTME" icon={Putme}/>
                        </Flex>
                    </WhiteBg2>
                </FlexWrap>
            </MaxWidth>
        </div>
    )
}