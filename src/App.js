import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home.js";
import Contact from "./pages/contact/Contact.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import AuthProvider from "./contexts/AuthProvider.js";
import Reset from "./pages/Reset.js";
import Details from "./pages/details/Details.js";
import PrivateRoute from "./route/PrivateRoute.js";
import Header from "./pages/shared/header/Header";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/about/About";
import Services from "./pages/services/services";
import Footer from "./pages/shared/footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="/reset">
              <Reset></Reset>
            </Route>

            <Route path="/services/:key">
              <Details></Details>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
