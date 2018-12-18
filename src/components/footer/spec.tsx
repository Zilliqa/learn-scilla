import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '.';
import { shallow } from 'enzyme';

describe('Footer tests', () => {
  const baseComponent = () => <Footer />;

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('footer').length;
      expect(assertion).toBe(1);
    });
  });
});
