import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';

import AuthModal from '.';

const options = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
};

const login = () => setTimeout(() => console.log('login'), 500);
const toggleAuthModal = () => console.log('toggle');
const t = (s: string) => s;

const baseComponent = (props) => (
  <nav className="navbar navbar-expand-md navbar-light bg-pale">
    <ul className="ml-auto navbar-nav">
      <AuthModal
        toggleAuthModal={toggleAuthModal}
        login={login}
        isAuthModalOpen={true}
        isAuthPending={false}
        isLoaded={props.isLoaded}
        t={t}
      />{' '}
    </ul>
  </nav>
);

setAddon(chaptersAddon);
storiesOf('component.AuthModal', module)
  .add('Auth Modal (loaded)', () =>
    baseComponent({
      isLoaded: true
    })
  )
  .add('Auth Modal (loading)', () =>
    baseComponent({
      isLoaded: false
    })
  );
