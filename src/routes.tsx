import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import AuthContainer from './containers/auth-form-container';
import HomeCotainer from './containers/home-container';
import CodeContainer from './containers/code-container';
import EmailVerificationContainer from './containers/email-verification-container';
import ResetPasswordContainer from './containers/reset-password-container';

export const appHistory = createHistory();

export const paths = {
  home: '/home',
  codeTutorial: '/learn',
  signin: '/signin',
  signup: '/signup',
  forgotPassword: '/forget-password',
  emailVerification: '/email-verification',
  resetPassword: '/password-reset'
};

export const routeList = [
  {
    path: paths.home,
    component: HomeCotainer,
    label: 'Home'
  },
  {
    path: paths.codeTutorial,
    component: CodeContainer,
    label: 'Learn'
  },
  {
    path: paths.signin,
    component: AuthContainer,
    label: 'Login'
  },
  {
    path: paths.signup,
    component: AuthContainer,
    label: undefined
  },
  {
    path: paths.forgotPassword,
    component: AuthContainer,
    label: undefined
  },
  {
    path: paths.emailVerification,
    component: EmailVerificationContainer,
    label: undefined
  },
  {
    path: paths.resetPassword,
    component: ResetPasswordContainer,
    label: undefined
  }
];

export const RouterNode: React.SFC = () => (
  <Router history={appHistory}>
    <div>
      <Switch>
        {routeList.map((prop, key) => (
          <Route exact={true} path={prop.path} key={key} component={prop.component} />
        ))}
        <Redirect from="/" to={paths.home} />
      </Switch>
    </div>
  </Router>
);
