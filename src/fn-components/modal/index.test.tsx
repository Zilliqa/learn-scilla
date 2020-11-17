import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Modal from '.';
import 'jest-styled-components';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('matches the snapshot (small)', () => {
  const close = jest.fn();
  const { container } = render(
    <Modal onClose={close}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </Modal>
  );
  expect(container.firstChild).toMatchSnapshot();
});
