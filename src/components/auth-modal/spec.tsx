import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import AuthModal from '.';

const login = () => setTimeout(() => console.log('login'), 500);
const t = (s: string) => s;

describe('Auth Modal tests', () => {
  const baseComponent = (props) => <AuthModal login={login} isLoaded={props.isLoaded} t={t} />;

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent({ isLoaded: false })).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders without crashing while loading', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ isLoaded: true }), div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing after loaded', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ isLoaded: false }), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
