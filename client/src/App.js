import axios from 'axios';
import { isNil } from 'lodash';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signUp';
import Categories from './components/Categories';
import Footer from './components/Footer';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';
import TwilioTest from "./pages/TwilioTest";

import MenuItem from "./components/MenuItem";
import Sidemenu from "./components/Sidemenu";
// import { Typography } from '@material-ui/core';

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });

    axios.get('/api/users').then((response) => {
      if (!isNil(response.data.user)) {
        dispatch({ type: SET_USER, user: response.data.user });
      } else {
        dispatch({ type: UNSET_USER });
      }
    });
  }, [dispatch, history]);

  return (
    <div>
      <Navbar />
      {/* <Typography /> */}

      {state.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/twilio" component={TwilioTest} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/twilio" component={TwilioTest} />
          <Redirect to="/login" />
        </Switch>
      )}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Redirect to="/login" />
          </Switch>


        )}
      <Categories />
      <MenuItem />
      <Footer />
    </div>
  );
};

export default App;