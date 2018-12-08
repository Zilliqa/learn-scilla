import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import ChapterProgressbar from '.';

describe('Lesson Progressbar tests', () => {
  const baseComponent = () => <ChapterProgressbar current={5} total={10} />;

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
