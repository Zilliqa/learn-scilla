import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import { translate } from 'react-i18next';
import Spinner from '../../../components/spinner';
import { NavItem, NavLink, Modal, ModalHeader, ModalBody } from 'reactstrap';

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
        <NavItem>
          <NavLink onClick={this.logout} style={cursorStyle}>
            {t('link.signOut')}
          </NavLink>
        </NavItem>
      );
    }
    return (
      <NavItem>
        <NavLink onClick={this.toggleModal} style={cursorStyle}>
          {t('link.signIn')}
        </NavLink>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} fade={false} size="sm">
          <ModalHeader toggle={this.toggleModal}>{'Learn Scilla'}</ModalHeader>
          <ModalBody>
            {!isLoaded ? (
              <Spinner />
            ) : (
              <div className="py-3 text-center">
                <div className="py-1">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => this.signIn(GOOGLE_PROVIDER, POPUP_TYPE)}
                  >
                    {t('auth.signInWithGoogle')}
                  </button>
                </div>
                <div className="py-1">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => this.signIn(GITHUB_PROVIDER, POPUP_TYPE)}
                  >
                    {t('auth.signInWithGitHub')}
                  </button>
                </div>
              </div>
            )}
          </ModalBody>
        </Modal>
      </NavItem>
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
