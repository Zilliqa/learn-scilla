import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import AuthContainer from './containers/auth-form-container';
import LessonContainer from './containers/lesson-container';
import ChapterContainer from './containers/chapter-container';
import EmailVerificationContainer from './containers/email-verification-container';
import ResetPasswordContainer from './containers/reset-password-container';

export const appHistory = createHistory();

export const paths = {
  home: '/home',
  lesson: '/lesson',
  chapter: '/lesson/:lesson/chapter/:chapter',
  signin: '/signin',
  signup: '/signup',
  forgotPassword: '/forget-password',
  emailVerification: '/email-verification',
  resetPassword: '/password-reset'
};

export const routeList = [
  {
    path: paths.home,
    component: LessonContainer
  },
  {
    path: paths.lesson,
    component: LessonContainer
  },
  {
    path: paths.chapter,
    component: ChapterContainer
  },
  {
    path: paths.signin,
    component: AuthContainer
  },
  {
    path: paths.signup,
    component: AuthContainer
  },
  {
    path: paths.forgotPassword,
    component: AuthContainer
  },
  {
    path: paths.emailVerification,
    component: EmailVerificationContainer
  },
  {
    path: paths.resetPassword,
    component: ResetPasswordContainer
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
