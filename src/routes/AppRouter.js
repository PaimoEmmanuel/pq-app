import {
   Router,
   withRouter,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "../pages/home";
import { GetStarted } from "../pages/get-started";
import { SelectExam } from "../pages/select-exam";
import { QuestionsPage }  from "../pages/questions";
import { AnswersPage }  from "../pages/answers";
import { SelectSubject } from "../pages/select-subject";
import { Finished } from "../pages/finished";
import { Navbar } from "../components/molecules/navbar";
import { Footer } from "../components/molecules/footer";
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();
const AppRouter = () => (
    <Router history={history}>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/get-started" component={GetStarted} exact={true} />
                <Route path="/select-exam" component={SelectExam} exact={true}/>
                <Route path="/done" component={Finished} exact={true} />
                <Route path="/select-exam/:id" component={SelectSubject} exact={true}/>
                <Route path="/select-exam/:id/questions" component={QuestionsPage} exact={true}/>
                <Route path="/done/answers" component={AnswersPage} exact={true}/>
                <Route path="/done" component={Finished} exact={true} />
                {/* <PrivateRoute path="/dashboard" exact={true} component={BlogDashboardPage} /> */}
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
            <Footer />
    </Router>
);

export default AppRouter;
