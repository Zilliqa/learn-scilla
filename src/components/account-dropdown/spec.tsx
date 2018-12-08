import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import AccountDropdown from '.';
import { paths } from '../../routes';

const t = (s: string) => s;
const username = 'noel';
const pathname = '/account';
const logout = () => console.log('logout');
const navigateToAccount = () => console.log('navigateToAccount');

describe('Account Dropdown tests', () => {
  const baseComponent = () => (
    <AccountDropdown
      t={t}
      paths={paths}
      currentPathname={pathname}
      username={username}
      logout={logout}
      navigateToAccount={navigateToAccount}
    />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent(), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
