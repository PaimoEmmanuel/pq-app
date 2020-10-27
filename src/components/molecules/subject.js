import styled from "styled-components";
import { Medal } from "../atoms/icons";
import { HeadLine6, Button } from "../atoms/typography";

export const Subject = ({ subject }) => (
    <div>
        <Medal />
        <HeadLine6>{subject}</HeadLine6>
        <Button>START</Button>
    </div>
)