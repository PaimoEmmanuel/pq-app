import { WhiteBg } from "../molecules/white-bg";
import { Body2 } from "../atoms/typography"

export const User = ({ user }) => (
    <WhiteBg>
        <Body2> {user}</Body2>
    </WhiteBg>
)