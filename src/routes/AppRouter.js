import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "../pages/home";
import { Footer } from "../components/molecules/footer";

const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                {/* <Route path="/signin" component={SigninPage} exact={true} />
                <Route path="/create-blog" component={CreateBlogPage} /> */}
                {/* <Route path="/edit/:id" component={EditBlogPage} /> */}
                {/* <PrivateRoute path="/dashboard" exact={true} component={BlogDashboardPage} /> */}
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;
