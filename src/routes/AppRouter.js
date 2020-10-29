import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "../pages/home";
import { GetStarted } from "../pages/get-started";
import { SelectExam } from "../pages/select-exam";
import { SelectSubject } from "../pages/select-subject";
import { Navbar } from "../components/molecules/navbar";
import { Footer } from "../components/molecules/footer";

const AppRouter = () => (
    <Router>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/get-started" component={GetStarted} exact={true} />
                <Route path="/select-exam" component={SelectExam} exact={true}/>
                <Route path="/select-exam/:id" component={SelectSubject} />
                {/* <PrivateRoute path="/dashboard" exact={true} component={BlogDashboardPage} /> */}
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;
