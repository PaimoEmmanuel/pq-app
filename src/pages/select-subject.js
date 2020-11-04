import { useContext } from "react"
import { UserContext } from "../contexts/UserContext";
import { updateExamType } from "../actions/exam-type-action";
import { ExamTypeContext } from "../contexts/examTypeContext";
import { subjects, years } from "../utils";
import { Body3 } from "../components/atoms/typography";
import { VerticalSpacer } from "../components/atoms/spacer";
import ExamDetails from "../components/organisms/exam-details";
import { BgWrapper } from "../components/molecules/bg-wrapper";
import { WhiteLayout } from "../components/layouts/white-bg-layout";

export const SelectSubject = ({ match }) => {
    const { user } = useContext(UserContext);
    const { dispatch } = useContext(ExamTypeContext);
    dispatch(updateExamType(match.params.id.toLowerCase()));
    return (
        <div>
            <BgWrapper></BgWrapper>
            <WhiteLayout user={user} heading={match.params.id} width="100%">
            <VerticalSpacer size="6.7rem" />
                    <Body3 color="defaultBlue">Enter details below</Body3>
                    <VerticalSpacer size="6.2rem" />
                    <ExamDetails examType="WaSSCE" optionOne={subjects} optionTwo={years} />
                    <VerticalSpacer size="5.4rem"/>
                    <VerticalSpacer size="19rem" />
            </WhiteLayout>
        </div>
    )
}