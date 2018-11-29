import React from 'react';
import Progress from '.';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Progress value={5} max={10} color={'secondary'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
