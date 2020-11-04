import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { WhiteBg } from "../molecules/white-bg";
import { OffWhiteBg } from "../molecules/offwhite-bg";
import { MaxWidth } from "../atoms/base/global";
import { User } from "../molecules/user";
import { ExamHeader } from "../molecules/exam-header";
import { VerticalSpacer } from "../atoms/spacer";

const UserWrapper = styled.div`
    margin-bottom: -2.5rem;
`;
export const WhiteLayout = ({ heading, width = "fit-content", children }) => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <OffWhiteBg></OffWhiteBg>
            <MaxWidth>
                <VerticalSpacer size="6.6rem"/>
                <ExamHeader heading={heading} />
                <VerticalSpacer size="11px"/>
                <UserWrapper>
                    <User user={user} />
                </UserWrapper>
                
                <WhiteBg width={width}>
                    {children}
                </WhiteBg>
                <VerticalSpacer size="5rem"/>
            </MaxWidth>
        </div>
    );
};