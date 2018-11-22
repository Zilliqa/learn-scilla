// @ts-ignore
import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import LessonListContainer from './containers/lesson-list-container';
import ChapterContainer from './containers/chapter-container';
const LessonCompleteContainer = lazy(() => import('./containers/lesson-complete-container'));

import Spinner from './components/spinner';

export const paths = {
  lessonList: '/',
  lessonComplete: '/lesson-complete/:lesson',
  chapter: '/lesson/:lesson/chapter/:chapter'
};

export const RouterNode: React.SFC = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact={true} path={paths.lessonList} component={LessonListContainer} />
        <Route exact={true} path={paths.chapter} component={ChapterContainer} />
        <Route exact={true} path={paths.lessonComplete} component={LessonCompleteContainer} />
        <Redirect from="/" to={paths.lessonList} />
      </Switch>
    </Suspense>
  </Router>
);
