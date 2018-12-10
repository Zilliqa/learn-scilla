import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import intructionsLocalized from '../../course/instructions/en/index';
import ChapterList from '.';

const t = (s: string) => s;

describe('Chapter Complete Card tests', () => {
  const baseComponent = (props) => (
    <MemoryRouter initialEntries={['/']}>
      <ChapterList
        chapterList={intructionsLocalized}
        isAuth={props.isAuth}
        progress={props.progress}
        t={t}
      />
    </MemoryRouter>
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer
        .create(baseComponent({ isAuth: true, progress: { chapter1: 3 } }))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders without crashing when auth is false', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ isAuth: false, progress: undefined }), div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing when auth is true', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ isAuth: true, progress: { chapter1: 3 } }), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
