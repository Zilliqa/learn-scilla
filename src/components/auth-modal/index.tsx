import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Modal from 'reactstrap/lib/Modal';
import Spinner from '../../components/spinner';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import Button from '../button';

interface IProps {
  t: (key: string) => string;
  login: (params) => void;
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
    <li className="nav-item" data-test-id="auth-modal">
      <a className="nav-link cursor-pointer" onClick={toggleAuthModal} data-test-id="toggle">
        {t('link.signIn')}
      </a>
      <Modal isOpen={isAuthModalOpen} toggle={toggleAuthModal} size="md">
        <ModalHeader toggle={toggleAuthModal}>{t('link.signIn')}</ModalHeader>
        <div className="modal-body">
          {!isLoaded || isAuthPending ? (
            <Spinner />
          ) : (
            <div className="py-3 text-center">
              <div className="py-1">
                <Button
                  data-test-id="google-login-button"
                  type="secondary"
                  text={t('auth.signInWithGoogle')}
                  onClick={() => login('google')}
                  ariaLabel={'Login with Google'}
                  before={<FaGoogle />}
                />
              </div>
              <div className="py-1">
                <Button
                  data-test-id="github-login-button"
                  type="secondary"
                  text={t('auth.signInWithGitHub')}
                  onClick={() => login('github')}
                  ariaLabel={'Login with GitHub'}
                  before={<FaGithub />}
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
