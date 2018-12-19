import React from 'react';
import { shallow } from 'enzyme';
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

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('[data-test-id="account-dropdown"]').length;
      expect(assertion).toBe(1);
    });
  });
});
