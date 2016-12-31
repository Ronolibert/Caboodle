import React from 'react';
import { Route, IndexRoute } from 'react-router';
// import { routerActions } from 'react-router-redux';
// import { UserAuthWrapper } from 'redux-auth-wrapper';

import { Layout, Homepage, Login, Signup } from './components';


// const isValidUser = UserAuthWrapper({
//   authSelector: state => state.auth,
//   predicate: auth => auth.isAuthenticated,
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'isValidUser',
//   failureRedirectPath: '/',
// });

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Homepage} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </Route>
);


    // <Route path="/dashboard" component={isValidUser(DashBoard)} />
