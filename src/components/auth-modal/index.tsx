import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Button, Spinner } from 'accessible-ui';
import Modal from 'reactstrap/lib/Modal';
import ModalHeader from 'reactstrap/lib/ModalHeader';

interface IProps {
  t: (key: string) => string;
  login: (provider: string) => Promise<void>;
  toggleAuthModal: () => void;
  isLoaded: boolean;
  isAuthModalOpen: boolean;
  isAuthPending: boolean;
}

const AuthModal: React.SFC<IProps> = ({
  t,
  isLoaded,
  isAuthModalOpen,
  isAuthPending,
  toggleAuthModal,
  login
}) => {
  return (
    <li className="nav-item" data-testid="auth-modal">
      <Button
        level="tertiary"
        className="nav-link"
        onClick={toggleAuthModal}
        data-testid="toggle"
        text={t('link.signIn')}
        type="button"
      />

      <Modal isOpen={isAuthModalOpen} toggle={toggleAuthModal} size="md">
        <ModalHeader toggle={toggleAuthModal}>{t('link.signIn')}</ModalHeader>
        <div className="modal-body">
          {!isLoaded || isAuthPending ? (
            <div className="text-center">
              <Spinner />
            </div>
          ) : (
            <div className="py-3 text-center">
              <div className="py-1">
                <Button
                  data-testid="google-login-button"
                  level="secondary"
                  text={t('auth.signInWithGoogle')}
                  onClick={() => login('google')}
                  before={<FaGoogle />}
                  type="button"
                />
              </div>
              <div className="py-1">
                <Button
                  data-testid="github-login-button"
                  level="secondary"
                  text={t('auth.signInWithGitHub')}
                  onClick={() => login('github')}
                  before={<FaGithub />}
                  type="button"
                />
              </div>
            </div>
          )}
        </div>
      </Modal>
    </li>
  );
};

export default AuthModal;
