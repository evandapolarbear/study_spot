import React from 'react';
import { Provider, connect } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import MainContainer from './main/main_container';
import SessionFormContainer from './session_form/session_form_container';
import SpotFormContainer from './spot_form/spot_form_container';
import SpotShowContainer from './spot_show/spot_show_container';

import { receiveErrors } from '../actions/session_actions';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-100093209-1');


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const fireTracking = () => {
    ReactGA.pageview(window.location.hash);
  }

  return (
    <Provider store={store}>
      <Router onUpdate={fireTracking} history={hashHistory}>
        <Route path="/" component={MainContainer}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/spot/new" component={SpotFormContainer}
          onEnter={_ensureLoggedIn}/>
          <Route path="/spot/:spotId" component={SpotShowContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
