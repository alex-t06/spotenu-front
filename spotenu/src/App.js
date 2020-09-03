import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminRegistration from "./pages/AdminRegistration";
import BandApprove from "./pages/BandApprove";
import BandRegistration from "./pages/BandRegistration";
import HomePageUser from "./pages/HomePageUser";
import ListenerRegistration from "./pages/ListenerRegistration";
import LoginPage from "./pages/LoginPage";
import styled from "styled-components"
import "rsuite/dist/styles/rsuite-default.css";

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/register/admin' component={AdminRegistration} />
          <Route exact path='/register/band' component={BandRegistration} />
          <Route
            exact
            path='/register/listener'
            component={ListenerRegistration}
          />
          <Route exact path='/approve/band' component={BandApprove} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/user' component={HomePageUser} />
        </Switch>
      </AppContainer>
    </Router>
  );
};

export default App;
