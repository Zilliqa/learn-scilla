// @ts-ignore
import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ChapterListContainer from './containers/chapter-list-container';
const ChapterCompleteContainer = lazy(() => import('./containers/chapter-complete-container'));
const AccountContainer = lazy(() => import('./containers/account-container'));
const LessonContainer = lazy(() => import('./containers/lesson-container'));
import Spinner from './components/spinner';

export const paths = {
  chapterList: '/',
  chapterComplete: '/chapter-complete/:chapter',
  lesson: '/chapter/:chapter/lesson/:lesson',
  account: '/account'
};

export const RouterNode: React.SFC = () => (
  <Router>
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact={true} path={paths.chapterList} component={ChapterListContainer} />
        <Route exact={true} path={paths.lesson} component={LessonContainer} />
        <Route exact={true} path={paths.chapterComplete} component={ChapterCompleteContainer} />
        <Route exact={true} path={paths.account} component={AccountContainer} />
        <Redirect from="/" to={paths.chapterList} />
      </Switch>
    </Suspense>
  </Router>
);
