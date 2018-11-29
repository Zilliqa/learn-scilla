import React from 'react';
import LessonProgressbar from '.';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<LessonProgressbar current={5} total={10} />).toJSON();
  expect(tree).toMatchSnapshot();
});
