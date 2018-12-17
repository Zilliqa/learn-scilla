import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import CheatSheetModal from '.';

const t = (s: string) => s;

describe('Cheat Sheet Modal tests', () => {
  const baseComponent = () => <CheatSheetModal t={t} />;

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
