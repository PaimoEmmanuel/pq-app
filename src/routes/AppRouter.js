import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Navbar } from "../components/molecules/navbar"

const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" component={Navbar} exact={true} />
                {/* <Route path="/signin" component={SigninPage} exact={true} />
                <Route path="/create-blog" component={CreateBlogPage} /> */}
                {/* <Route path="/edit/:id" component={EditBlogPage} /> */}
                {/* <PrivateRoute path="/dashboard" exact={true} component={BlogDashboardPage} /> */}
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
            {/*<Footer />*/}
        </div>
    </Router>
);

export default AppRouter;
