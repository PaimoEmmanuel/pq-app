import { WhiteBg } from "../molecules/white-bg";
import { HeadLine2 } from "../atoms/typography"

export const ExamHeader = ({ heading }) => (
    <WhiteBg>
        <HeadLine2>ID: {heading}</HeadLine2>
    </WhiteBg>
)