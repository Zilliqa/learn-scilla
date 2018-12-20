import React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LessonProgressbar from '.';

const navigate = jest.fn();
const chapterNumber = 1;
describe('Lesson Progressbar tests', () => {
  const baseComponent = () => (
    <LessonProgressbar
      navigate={navigate}
      chapterNumber={chapterNumber}
      lessonNumber={5}
      total={10}
    />
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

  describe('component behavior', () => {
    it('google login', () => {
      const index = 1;
      const wrapper = shallow(baseComponent());
      wrapper.find(`[data-test-id="lesson-progressbar-block${index}"]`).simulate('click');
      expect(navigate).toHaveBeenCalled();

      expect(navigate.mock.calls[0][0]).toBe(chapterNumber);
      expect(navigate.mock.calls[0][1]).toBe(index + 1);
      expect(navigate.mock.calls.length).toBe(1);
    });
  });
});
