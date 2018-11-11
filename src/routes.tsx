import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import AuthContainer from './containers/auth-form-container';
import LessonListContainer from './containers/lesson-list-container';
import LessonCompleteContainer from './containers/lesson-complete-container';
import ChapterContainer from './containers/chapter-container';
import EmailVerificationContainer from './containers/email-verification-container';
import ResetPasswordContainer from './containers/reset-password-container';

export const appHistory = createHistory();

export const paths = {
  home: '/home',
  lessonList: '/lesson-list',
  lessonComplete: '/lesson-complete/:lesson',
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
    component: LessonListContainer
  },
  {
    path: paths.lessonList,
    component: LessonListContainer
  },
  {
    path: paths.lessonComplete,
    component: LessonCompleteContainer
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
