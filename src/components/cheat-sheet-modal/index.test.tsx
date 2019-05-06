import React from 'react';
import * as renderer from 'react-test-renderer';
import CheatSheetModal from '.';
import { shallow } from 'enzyme';

const t = (s: string) => s;

describe('Cheat Sheet Modal tests', () => {
  const baseComponent = () => <CheatSheetModal buttonType="secondary" t={t} />;

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

  describe('component behavior', () => {
    it('check modal closed', () => {
      const wrapper = shallow(baseComponent());
      expect(wrapper.state('isOpen')).toEqual(false);
    });

    it('check modal opened after toggle', () => {
      const wrapper = shallow(baseComponent());
      wrapper.find('[data-testid="toggle"]').simulate('click');
      expect(wrapper.state('isOpen')).toEqual(true);
    });
  });
});
