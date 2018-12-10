import * as React from 'react';
import { storiesOf } from '@storybook/react';

import AuthModal from '.';

const login = () => setTimeout(() => console.log('login'), 3000);
const t = (s: string) => s;

const baseComponent = (props) => (
  <nav className="navbar navbar-expand-md navbar-light bg-pale">
    <ul className="ml-auto navbar-nav">
      <AuthModal login={login} isLoaded={props.isLoaded} t={t} />
    </ul>
  </nav>
);

storiesOf('Auth Modal', module)
  .add('loaded', () => baseComponent({ isLoaded: true }))
  .add('loading', () => baseComponent({ isLoaded: false }));
