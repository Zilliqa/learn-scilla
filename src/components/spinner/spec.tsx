import React from 'react';
import Spinner from '.';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Spinner />).toJSON();
  expect(tree).toMatchSnapshot();
});
