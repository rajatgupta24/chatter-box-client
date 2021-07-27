import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./routes/PrivateRoutes";
import ForgetPassword from "./components/auth/ForgetPassword";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/forget-password" component={ForgetPassword}/>
          <PrivateRoutes path="/" exact component={Dashboard} />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
