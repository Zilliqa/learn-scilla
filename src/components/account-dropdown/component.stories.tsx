import * as React from 'react';
import { storiesOf } from '@storybook/react';

import AccountDropdown from '.';
import { paths } from '../../routes';

const t = (s: string) => s;
const logout = () => console.log('logout');
const navigateToAccount = () => console.log('navigateToAccount');

const baseComponent = (props) => (
  <nav className="navbar navbar-expand-md navbar-light bg-pale">
    <ul className="ml-auto navbar-nav">
      <AccountDropdown
        t={t}
        paths={paths}
        currentPathname={props.pathname}
        username={props.username}
        logout={logout}
        navigateToAccount={navigateToAccount}
      />
    </ul>
  </nav>
);

storiesOf('Account Dropdown', module).add('default', () =>
  baseComponent({
    username: 'noel',
    pathname: '/account'
  })
);
