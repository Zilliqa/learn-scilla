import React from 'react';
import InstructionViewer from '.';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<InstructionViewer instruction={`## markdown`} />).toJSON();
  expect(tree).toMatchSnapshot();
});
