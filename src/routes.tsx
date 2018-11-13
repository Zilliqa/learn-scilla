import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import LessonListContainer from './containers/lesson-list-container';
import LessonCompleteContainer from './containers/lesson-complete-container';
import ChapterContainer from './containers/chapter-container';

export const appHistory = createHistory();

export const paths = {
  home: '/home',
  lessonList: '/lesson-list',
  lessonComplete: '/lesson-complete/:lesson',
  chapter: '/lesson/:lesson/chapter/:chapter',
  signin: '/signin'
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
