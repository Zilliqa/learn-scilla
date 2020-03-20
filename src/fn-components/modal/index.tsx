import * as React from 'react';
import styled from 'styled-components';
import colors from '../colors';

const Blanket = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(10, 10, 15, 0.7);
  padding: 1.75rem 1rem;
  overflow: hidden;
  z-index: 9999;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  z-index: 10000;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  color: ${colors.gray700};
`;

const Content = styled.div`
  padding: 3rem 3rem;
  overflow-y: auto;
  max-height: calc(100vh);
`;

export interface Props {
  onClose?: () => void;
  closeMark?: React.ReactNode;
  children?: React.ReactNode;
}

const Modal: React.FunctionComponent<Props> = (props) => {
  const { onClose, children, closeMark = '✕' } = props;
  return (
    <Blanket onClick={onClose}>
      <Container
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton onClick={onClose}>{closeMark}</CloseButton>
        <Content>{children}</Content>
      </Container>
    </Blanket>
  );
};

export default Modal;
