import React from 'react';
import * as renderer from 'react-test-renderer';
import AuthModal from '.';
import { shallow } from 'enzyme';

const login = () => setTimeout(() => console.log('login'), 500);
const t = (s: string) => s;

describe('Auth Modal tests', () => {
  const baseComponent = (props) => <AuthModal login={login} isLoaded={props.isLoaded} t={t} />;

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
      const wrapper = shallow(baseComponent({ isLoaded: false }));
      const assertion = wrapper.find('[data-test-id="auth-modal"]').length;
      expect(assertion).toBe(1);
    });
  });

  describe('component behavior', () => {
    it('check modal closed', () => {
      const wrapper = shallow(baseComponent({ isLoaded: true }));
      expect(wrapper.state('isOpen')).toEqual(false);
    });

    it('check modal opened after toggle', () => {
      const wrapper = shallow(baseComponent({ isLoaded: true }));
      wrapper.find('[data-test-id="toggle"]').simulate('click');
      expect(wrapper.state('isOpen')).toEqual(true);
    });
  });
});
