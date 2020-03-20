import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Spinner from '.';
import 'jest-styled-components';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('matches the snapshot (small)', () => {
  const { container } = render(<Spinner size="small" data-testid="spinner" />);
  expect(container.firstChild).toMatchSnapshot();
});
test('matches the snapshot (medium)', () => {
  const { container } = render(<Spinner size="medium" data-testid="spinner" />);
  expect(container.firstChild).toMatchSnapshot();
});
test('matches the snapshot (large)', () => {
  const { container } = render(<Spinner size="large" data-testid="spinner" />);
  expect(container.firstChild).toMatchSnapshot();
});
