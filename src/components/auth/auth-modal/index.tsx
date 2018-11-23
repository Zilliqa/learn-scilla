import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { translate } from 'react-i18next';
import Spinner from '../../../components/spinner';

import { FaGoogle, FaGithub } from 'react-icons/fa';
import { withFirebase } from 'react-redux-firebase';
import Modal from 'reactstrap/lib/Modal';

interface IProps {
  t: (key: string) => string;
  firebase: any; // TODO: specify type
  auth: { isLoaded: boolean; isEmpty: boolean };
}

interface IState {
  isModalOpen: boolean;
}

const GITHUB_PROVIDER = 'github';
const GOOGLE_PROVIDER = 'google';
const POPUP_TYPE = 'popup';

class AuthModal extends React.Component<IProps, IState> {
  public readonly state = {
    isModalOpen: false
  };
  public render(): React.ReactNode {
    const { t, auth } = this.props;
    const { isLoaded, isEmpty } = auth;

    const cursorStyle = { cursor: 'pointer' };

    if (!isEmpty) {
      return (
        <li className="nav-item">
          <a className="nav-link" onClick={this.logout} style={cursorStyle}>
            {t('link.signOut')}
          </a>
        </li>
      );
    }
    return (
      <li className="nav-item">
        <a className="nav-link" onClick={this.toggleModal} style={cursorStyle}>
          {t('link.signIn')}
        </a>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="sm">
          <div className="modal-body">
            {!isLoaded ? (
              <Spinner />
            ) : (
              <div className="py-3 text-center">
                <div className="py-1">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => this.signIn(GOOGLE_PROVIDER, POPUP_TYPE)}
                  >
                    <FaGoogle /> <small>{t('auth.signInWithGoogle')}</small>
                  </button>
                </div>
                <div className="py-1">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => this.signIn(GITHUB_PROVIDER, POPUP_TYPE)}
                  >
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
      isModalOpen: !this.state.isModalOpen
    });
  };

  private signIn = (provider: string, type: string): void => {
    const { firebase } = this.props;
    const options = { provider, type };
    firebase.login(options);
    this.setState({
      isModalOpen: false
    });
  };

  private logout = () => {
    const { firebase } = this.props;
    firebase.logout();
    this.setState({
      isModalOpen: false
    });
  };
}

const WithTranslation = translate('translations')(AuthModal);

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    undefined
  )
)(WithTranslation);
