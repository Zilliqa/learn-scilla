import React from 'react';
import AuthModal from '.';
import * as renderer from 'react-test-renderer';

const login = () => setTimeout(() => console.log('login'), 500);
const t = (s: string) => s;

it('renders correctly while loading', () => {
  const tree = renderer.create(<AuthModal login={login} isLoaded={false} t={t} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly after loaded', () => {
  const tree = renderer.create(<AuthModal login={login} isLoaded={true} t={t} />).toJSON();
  expect(tree).toMatchSnapshot();
});
