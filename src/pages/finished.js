import Complete from "../components/organisms/complete";
import { WhiteLayout } from "../components/layouts/white-bg-layout";
import { BgWrapper } from "../components/molecules/bg-wrapper";


export const Finished = () => (
    <div>
        <BgWrapper></BgWrapper>
        <WhiteLayout heading="Quiz Completed" user="paimo" width="100%">
            <Complete />
        </WhiteLayout>
    </div>
);

