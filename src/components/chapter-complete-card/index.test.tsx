import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import ChapterCompleteCard from '.';

const t = (s: string) => s;
const navigate = (chapterNum, lessonNum) => console.log('navigate', chapterNum, lessonNum);

describe('Chapter Complete Card tests', () => {
  const baseComponent = (props) => (
    <MemoryRouter initialEntries={['/']}>
      <ChapterCompleteCard navigate={navigate} t={t} total={props.total} chapter={props.chapter} />
    </MemoryRouter>
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent({ total: 2, chapter: 1 })).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders without crashing while loading', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ total: 2, chapter: 1 }), div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing after loaded', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ total: 2, chapter: 1 }), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
