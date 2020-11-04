import  UserForm  from "../components/organisms/user-form";
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();

export const GetStarted = () => (
    <UserForm history={history}/>
);

