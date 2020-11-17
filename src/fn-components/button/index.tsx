import * as React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const StyledButton = styled.button`
  outline: none;
  margin: 0;
  font-family: inherit;
  overflow: visible;
  text-transform: none;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  & [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  &::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

${({ disabled }) => (disabled ? `cursor: not-allowed; opacity: 0.7;` : `cursor: pointer;`)}

  ${({ size }) =>
    size === 'large'
      ? `&{
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
      }`
      : size === 'small'
      ? `&{
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
      }`
      : `&{
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
      }`}

  ${({ level, theme, primaryColor }) =>
    level === 'primary' && theme === 'light'
      ? `&{
            background-color: ${primaryColor};
            color: ${colors.white};
            border-color: transparent;
            opacity: 0.85;
          }&:hover,:active,:focus{
            opacity: 1;
          }`
      : level === 'primary' && theme === 'dark'
      ? `&{
            background-color: ${primaryColor};
            color: ${colors.white};
            border-color: transparent;
            opacity: 0.85;
          }&:hover,:active,:focus{
            opacity: 1;
          }`
      : level === 'secondary' && theme === 'light'
      ? `&{
            background-color: transparent;
            color: ${colors.black};
            border-color: ${colors.black};
            opacity: 0.85;
          }&:hover,:active,:focus{
            opacity: 1;
          }`
      : level === 'secondary' && theme === 'dark'
      ? `&{
            background-color: transparent;
            color: ${colors.white};
            border-color: ${colors.white};
            opacity: 0.85;
          }&:hover,:active,:focus{
            opacity: 1;
          }`
      : level === 'tertiary' && theme === 'light'
      ? `&{
            background-color: transparent;
            color: ${colors.black};
            border-color: transparent;
            opacity: 0.85;
          }&:hover,:active,:focus{
            opacity: 1;
          }`
      : level === 'tertiary' && theme === 'dark'
      ? `&{
            background-color: transparent;
            color: ${colors.white};
            border-color: transparent;
            opacity: 0.85;
          }&:hover,:active,:focus{
            opacity: 1;
          }`
      : ``}
`;

export interface Props {
  readonly level: ButtonLevelType;
  readonly size?: SizeType;
  readonly text?: string;
  readonly onClick?: (e?) => void;
  readonly id?: string;
  readonly disabled?: boolean;
  readonly before?: React.ReactNode;
  readonly after?: React.ReactNode;
  readonly className?: string;
  readonly type?: ButtonType;
  readonly style?: object;
  readonly theme?: ThemeType;
  readonly primaryColor?: string;
}

export type ThemeType = 'light' | 'dark';
export type ButtonType = 'button' | 'submit' | 'reset';
export type SizeType = 'large' | 'medium' | 'small';
export type ButtonLevelType = 'primary' | 'secondary' | 'tertiary';

const Button: React.FunctionComponent<Props> = ({
  text = '',
  size = 'medium',
  className = '',
  type = 'submit',
  theme = 'light',
  disabled,
  onClick,
  before,
  after,
  style,
  level,
  primaryColor = colors.blue600,
  ...args
}) => (
  <StyledButton
    level={level}
    size={size}
    theme={theme}
    className={className || ''}
    onClick={onClick}
    aria-label={text}
    disabled={disabled}
    type={type}
    style={style}
    primaryColor={primaryColor}
    {...args}
  >
    {before ? before : null} {text} {after ? after : null}
  </StyledButton>
);

export default Button;
