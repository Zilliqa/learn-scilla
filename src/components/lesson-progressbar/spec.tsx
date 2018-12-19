import React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LessonProgressbar from '.';

const navigate = (chapterNum, lessonNum) => {
  console.log(`navigate to: /chapter/${chapterNum}/lesson/${lessonNum}`);
};

describe('Lesson Progressbar tests', () => {
  const baseComponent = () => (
    <LessonProgressbar navigate={navigate} chapterNumber={1} lessonNumber={5} total={10} />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component', () => {
      const wrapper = shallow(baseComponent());
      const assertion = wrapper.find('[data-test-id="lesson-progressbar"]').length;
      expect(assertion).toBe(1);
    });
  });
});
