import * as React from 'react';
import styled from 'styled-components';
import colors from '../colors';

export type SizeType = 'large' | 'medium' | 'small';
export interface Props {
  readonly size?: SizeType;
}

const SMALL = 15;
const MEDIUM = 50;
const LARGE = 80;

const StyledSpinner = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${colors.gray300};
  animation: loader-spin 1s infinite linear;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;

  ${({ size }) =>
    size === 'large'
      ? `&{
        width: ${LARGE}px;
        height: ${LARGE}px;
      }`
      : size === 'small'
      ? `&{
        width: ${SMALL}px;
        height: ${SMALL}px;
      }`
      : `&{
        width: ${MEDIUM}px;
        height: ${MEDIUM}px;
      }`}

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner: React.FunctionComponent<Props> = ({ size, ...rest }) => (
  <StyledSpinner size={size} {...rest} />
);

export default Spinner;
