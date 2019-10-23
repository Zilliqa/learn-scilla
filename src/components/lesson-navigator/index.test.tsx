import React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LessonNavigator from '.';

const goNext = () => console.log('goNext');
const goBack = () => console.log('goBack');
const t = (s: string) => s;

describe('Lesson Navigator tests', () => {
  const baseComponent = () => (
    <LessonNavigator lessonNumber={5} total={10} goNext={goNext} goBack={goBack} />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('[data-testid="lesson-navigator"]').length;
      expect(assertion).toBe(1);
    });
  });
});
