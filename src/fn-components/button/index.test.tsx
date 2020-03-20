import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '.';
import 'jest-styled-components';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const themeArray = ['light', 'dark'];
const levelArray = ['primary', 'secondary', 'tertiary'];
const sizeArray = ['small', 'medium', 'large'];
const disabledArray = [true, false];
const snapshot = (theme) => (level) => (size) => (disabled) => {
  test('matches the snapshot', () => {
    const onClick = jest.fn();
    const { container } = render(
      <Button
        theme={theme}
        text={`${theme} ${level} ${size}`}
        level={level}
        size={size}
        disabled={disabled}
        data-testid={`${theme}-${level}-${size}`}
        onClick={onClick}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
};

themeArray.forEach((theme) =>
  levelArray.forEach((level) =>
    sizeArray.forEach((size) =>
      disabledArray.forEach((disabled) => snapshot(theme)(level)(size)(disabled))
    )
  )
);

test('matches the snapshot', () => {
  const onClick = jest.fn();
  const { container } = render(
    <Button
      text={'before'}
      before={<span>Pre</span>}
      level={'primary'}
      data-testid={'button-before'}
      onClick={onClick}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('matches the snapshot', () => {
  const onClick = jest.fn();
  const { container } = render(
    <Button
      text={'before'}
      after={<span>Post</span>}
      level={'primary'}
      data-testid={'button-before'}
      onClick={onClick}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
