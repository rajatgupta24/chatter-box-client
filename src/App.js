import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./routes/PrivateRoutes";
import { makeStyles } from '@material-ui/core/styles';
import { AuthProvider } from "./contexts/AuthContext";
import ForgetPassword from "./components/auth/ForgetPassword";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UpdateInfo from "./components/auth/UpdateInfo";

const useStyles = makeStyles({
  root: {
    width: "100%",
    fontFamily: "sans-serif"
  },
});

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AuthProvider>
          <Switch >
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/forget-password" component={ForgetPassword}/>
            <PrivateRoutes path="/update-profile" component={UpdateInfo}/>
            <PrivateRoutes path="/" exact component={Dashboard} />
          </Switch>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
