import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home/home/Home";
import Admin from "./components/Admin/Admin/Admin";
import AddService from "./components/Admin/AdminPages/AddService/AddService";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Header from "./components/Home/Header/Header";
import AdminHome from "./components/Admin/AdminPages/AdminHome/AdminHome";
import MyService from "./components/Admin/AdminPages/MyService/MyService";
import MakeAdmin from "./components/Admin/AdminPages/MakeAdmin/MakeAdmin";
import SignUp from "./components/LogIn/LogIn/SignUp";
import SignIn from "./components/LogIn/LogIn/SignIn";
import { createContext, useState } from "react";
import PrivateRoute from "./components/LogIn/PrivateRoute/PrivateRoute";
import PaymentSuccess from "./components/Dashboard/PaymentProcess/PaymentSuccess";
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/paymentSuccess" component={PaymentSuccess}>
        <PaymentSuccess />
        </Route>
        <Route path="/dashboard" component={Dashboard}>
          <Header navbar-bg={true} />
          <Dashboard />
        </Route>
        <Route path="/SignIn">
          <Header navbar-bg={true} />
          <SignIn />
        </Route>
        <Route path="/LogIn" component={SignUp}>
          <Header navbar-bg={true} />
          <SignUp />
        </Route>
        <Route path="/home" component={Home}>
          <Home />
        </Route>
        <Route path="/makeAdmin" component={MakeAdmin}>
          <Admin />
          <MakeAdmin />
        </Route>
        <Route path="/myService" component={MyService}>
          <Admin />
          <MyService />
        </Route>
        <Route path="/addService" component={AddService}>
          <Admin />
          <AddService />
        </Route>
        <Route path="/" component={AdminHome}>
          <Admin />
          <AdminHome />
        </Route>
        <Route path="/admin" component={Admin}>
          <Admin />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
