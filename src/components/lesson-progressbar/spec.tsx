import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
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

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent(), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
