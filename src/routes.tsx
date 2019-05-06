// @ts-ignore
import React, { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Spinner } from 'uxd-components';
import HomeContainer from './containers/home-container';
const ChapterListContainer = lazy(() => import('./containers/chapter-list-container'));
const AccountContainer = lazy(() => import('./containers/account-container'));
const LessonContainer = lazy(() => import('./containers/lesson-container'));

export const paths = {
  home: '/home',
  chapterList: '/chapters',
  lesson: '/chapter/:chapter/lesson/:lesson',
  account: '/account'
};

export const RouterNode: React.SFC = () => (
  <Router>
    <Suspense
      fallback={
        <div className="text-center py-5">
          <Spinner />
        </div>
      }
    >
      <Switch>
        <Route exact={true} path={paths.home} component={HomeContainer} />
        <Route exact={true} path={paths.chapterList} component={ChapterListContainer} />
        <Route exact={true} path={paths.lesson} component={LessonContainer} />
        <Route exact={true} path={paths.account} component={AccountContainer} />
        <Redirect from="/" to={paths.home} />
      </Switch>
    </Suspense>
  </Router>
);
