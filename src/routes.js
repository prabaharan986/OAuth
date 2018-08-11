import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';

export const history = createBrowserHistory();

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const Routes = () => (
  <Router history={history}>
    <React.Fragment>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={
            (props) => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }
          }
        />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router >
);

export default Routes;

