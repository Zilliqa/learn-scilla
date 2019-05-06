import React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Spinner from '.';

describe('Spinner tests', () => {
  const baseComponent = () => <Spinner />;

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('[data-testid="spinner"]').length;
      expect(assertion).toBe(1);
    });
  });
});
