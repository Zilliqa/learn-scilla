import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { withFirebase } from 'react-redux-firebase';
import Modal from 'reactstrap/lib/Modal';
import Spinner from '../../components/spinner';

interface IProps {
  t: (key: string) => string;
  firebase: any; // TODO: specify type
  auth: any; // TODO: specify type
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
    const { t, auth } = this.props;
    const { isAuthPending } = this.state;
    const { isLoaded } = auth;
    const cursorStyle = { cursor: 'pointer' };
    return (
      <li className="nav-item">
        <a className="nav-link" onClick={this.toggleModal} style={cursorStyle}>
          {t('link.signIn')}
        </a>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="sm">
          <div className="modal-body">
            {!isLoaded || isAuthPending ? (
              <Spinner />
            ) : (
              <div className="py-3 text-center">
                <div className="py-1">
                  <button className="btn btn-outline-primary" onClick={() => this.signIn('google')}>
                    <FaGoogle /> <small>{t('auth.signInWithGoogle')}</small>
                  </button>
                </div>
                <div className="py-1">
                  <button className="btn btn-outline-primary" onClick={() => this.signIn('github')}>
                    <FaGithub /> <small>{t('auth.signInWithGitHub')}</small>
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
    const { firebase } = this.props;
    try {
      this.setState({ isAuthPending: true });
      await firebase.login({ provider, type: 'popup' });
    } catch (error) {
      this.setState({ isAuthPending: false });
      console.log(error);
    }
  };
}

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(AuthModal);
