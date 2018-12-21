import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';

import AccountDropdown from '.';
import { paths } from '../../routes';

const t = (s: string) => s;
const logout = () => console.log('logout');
const navigateToAccount = () => console.log('navigateToAccount');

const options = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
};

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

setAddon(chaptersAddon);
storiesOf('component.AccountDropdown', module)
  // @ts-ignore
  .addWithChapters('Account Dropdown', {
    chapters: [
      {
        info: 'account dropdown',
        sections: [
          {
            options,
            sectionFn: () =>
              baseComponent({
                username: 'noel',
                pathname: '/path'
              })
          }
        ]
      }
    ]
  });
