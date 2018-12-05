import React from 'react';
import ChapterProgressbar from '.';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ChapterProgressbar current={5} total={10} />).toJSON();
  expect(tree).toMatchSnapshot();
});
