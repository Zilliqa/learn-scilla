import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import Modal from 'reactstrap/lib/Modal';
import Spinner from '../../components/spinner';
import ModalHeader from 'reactstrap/lib/ModalHeader';

interface IProps {
  t: (key: string) => string;
  login: (params) => void;
  isLoaded: boolean;
}

interface IState {
  isModalOpen: boolean;
  isAuthPending: boolean;
}

class AuthModal extends React.Component<IProps, IState> {
  public readonly state = {
    isModalOpen: false,
    isAuthPending: false
  };
  public render(): React.ReactNode {
    const { t, isLoaded } = this.props;
    const { isAuthPending } = this.state;
    const cursorStyle = { cursor: 'pointer' };
    return (
      <li className="nav-item">
        <a className="nav-link" onClick={this.toggleModal} style={cursorStyle}>
          {t('link.signIn')}
        </a>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="md">
          <ModalHeader toggle={this.toggleModal}>{t('link.signIn')}</ModalHeader>
          <div className="modal-body">
            {!isLoaded || isAuthPending ? (
              <Spinner />
            ) : (
              <div className="py-3 text-center">
                <div className="py-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.signIn('google')}
                    aria-label={'sign in with google'}
                  >
                    <FaGoogle /> {t('auth.signInWithGoogle')}
                  </button>
                </div>
                <div className="py-1">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.signIn('github')}
                    aria-label={'sign in with github'}
                  >
                    <FaGithub /> {t('auth.signInWithGitHub')}
                  </button>
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
      isModalOpen: !this.state.isModalOpen,
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
