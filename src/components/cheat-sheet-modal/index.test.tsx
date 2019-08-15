import React from 'react';
import * as renderer from 'react-test-renderer';
import CheatSheetModal from '.';
import { shallow } from 'enzyme';

const t = (s: string) => s;

describe('Cheat Sheet Modal tests', () => {
  const baseComponent = () => <CheatSheetModal t={t} />;

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('[data-testid="cheat-sheet-modal"]').length;
      expect(assertion).toBe(1);
    });
  });
});
