import React from 'react';
import * as renderer from 'react-test-renderer';
import AuthModal from '.';
import { shallow } from 'enzyme';

const login = jest.fn();

const toggleAuthModal = () => console.log('toggle');
const t = (s: string) => s;

describe('Auth Modal tests', () => {
  const baseComponent = (props) => (
    <AuthModal
      toggleAuthModal={toggleAuthModal}
      login={login}
      isAuthModalOpen={false}
      isAuthPending={false}
      isLoaded={props.isLoaded}
      t={t}
    />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent({ isLoaded: false })).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component while loading', () => {
      const wrapper = shallow(baseComponent({ isLoaded: false }));
      const assertion = wrapper.find('[data-test-id="auth-modal"]').length;
      expect(assertion).toBe(1);
    });

    it('renders the component after loaded', () => {
      const wrapper = shallow(baseComponent({ isLoaded: true }));
      const assertion = wrapper.find('[data-test-id="auth-modal"]').length;
      expect(assertion).toBe(1);
    });
  });

  describe('component behavior', () => {
    it('google login', () => {
      const wrapper = shallow(baseComponent({ isLoaded: true }));
      wrapper.find('[data-test-id="google-login-button"]').simulate('click');
      expect(login.mock.calls[0][0]).toBe('google');
      expect(login.mock.calls.length).toBe(1);
    });

    it('github login', () => {
      const wrapper = shallow(baseComponent({ isLoaded: true }));
      wrapper.find('[data-test-id="github-login-button"]').simulate('click');
      expect(login.mock.calls[1][0]).toBe('github');
      expect(login.mock.calls.length).toBe(2);
    });
  });
});
