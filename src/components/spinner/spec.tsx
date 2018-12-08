import React from 'react';
import * as renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Spinner from '.';

describe('Spinner tests', () => {
  const baseComponent = () => <Spinner />;

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
