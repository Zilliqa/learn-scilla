import React from 'react';
import AccountDropdown from '.';
import * as renderer from 'react-test-renderer';
import { paths } from '../../routes';

const t = (s: string) => s;
const auth = { displayName: 'noel', email: 'noel@email.address' };
const pathname = '/account';
const logout = () => console.log('logout');
const navigateToAccount = () => console.log('navigateToAccount');

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AccountDropdown
        t={t}
        paths={paths}
        currentPathname={pathname}
        auth={auth}
        logout={logout}
        navigateToAccount={navigateToAccount}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
