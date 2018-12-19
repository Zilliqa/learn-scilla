import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Modal from 'reactstrap/lib/Modal';
import Spinner from '../../components/spinner';
import ModalHeader from 'reactstrap/lib/ModalHeader';
import Button from '../button';

interface IProps {
  t: (key: string) => string;
  login: (params) => void;
  isLoaded: boolean;
}

interface IState {
  isOpen: boolean;
  isAuthPending: boolean;
}

class AuthModal extends React.Component<IProps, IState> {
  public readonly state = {
    isOpen: false,
    isAuthPending: false
  };
  public render(): React.ReactNode {
    const { t, isLoaded } = this.props;
    const { isAuthPending } = this.state;
    const cursorStyle = { cursor: 'pointer' };
    return (
      <li className="nav-item" data-test-id="auth-modal">
        <a
          className="nav-link"
          onClick={this.toggleModal}
          style={cursorStyle}
          data-test-id="toggle"
        >
          {t('link.signIn')}
        </a>
        <Modal isOpen={this.state.isOpen} toggle={this.toggleModal} size="md">
          <ModalHeader toggle={this.toggleModal}>{t('link.signIn')}</ModalHeader>
          <div className="modal-body">
            {!isLoaded || isAuthPending ? (
              <Spinner />
            ) : (
              <div className="py-3 text-center">
                <div className="py-1">
                  <Button
                    type="secondary"
                    text={t('auth.signInWithGoogle')}
                    onClick={() => this.signIn('google')}
                    ariaLabel={'Login with Google'}
                    icon={{ image: <FaGoogle />, position: 'before' }}
                  />
                </div>
                <div className="py-1">
                  <Button
                    type="secondary"
                    text={t('auth.signInWithGitHub')}
                    onClick={() => this.signIn('github')}
                    ariaLabel={'Login with GitHub'}
                    icon={{ image: <FaGithub />, position: 'before' }}
                  />
                </div>
              </div>
            )}
          </div>
        </Modal>
      </li>
    );
  }

  private toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isAuthPending: false
    });
  };

  private signIn = async (provider: string) => {
    const { login } = this.props;
    try {
      this.setState({ isAuthPending: true });
      await login({ provider, type: 'popup' });
    } catch (error) {
      this.setState({ isAuthPending: false });
      console.log(error);
    }
  };
}

export default AuthModal;
