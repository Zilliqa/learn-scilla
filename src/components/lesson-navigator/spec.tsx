import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import LessonNavigator from '.';

const goNext = () => console.log('goNext');
const goBack = () => console.log('goBack');
const t = (s: string) => s;

describe('Lesson Navigator tests', () => {
  const baseComponent = () => (
    <LessonNavigator lessonNumber={5} total={10} goNext={goNext} goBack={goBack} t={t} />
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
