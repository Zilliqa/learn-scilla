import React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import LessonCompleteModal from '.';
const t = (s) => s;
const submit = () => console.log('submit');
const closeModal = () => console.log('close modal');

describe('Cheat Sheet Modal tests', () => {
  const baseComponent = () => (
    <LessonCompleteModal t={t} isModalVisible={false} onSubmit={submit} closeModal={closeModal} />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('[data-testid="lesson-complete-modal"]').length;
      expect(assertion).toBe(1);
    });
  });
});
