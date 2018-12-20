import React from 'react';
import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withFirebase } from 'react-redux-firebase';
import * as H from 'history';
import Collapse from 'reactstrap/lib/Collapse';
import AuthModal from '../auth-modal';
import { paths } from '../../routes';
import I18nDropdown from '../i18n-dropdown';
import AccountDropdown from '../account-dropdown';
import { langDictionary } from '../../i18n';
import { toggleAuthModal, openAuthModal } from '../../redux/auth';

interface IProps {
  history: H.History;
  location: H.Location;
  t: (key: string) => string;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  firebase: any;
  auth: any;
  isAuthModalOpen: boolean;
  toggleAuthModal: () => void;
}

interface IStates {
  isTogglerOpen: boolean;
  isAuthPending: boolean;
}

class Header extends React.Component<IProps, IStates> {
  public readonly state: IStates = {
    isTogglerOpen: false,
    isAuthPending: false
  };

  public render(): React.ReactNode {
    const { i18n, t, auth, history, location, firebase, isAuthModalOpen } = this.props;
    const { isLoaded, isEmpty } = auth;
    const { pathname } = location;
    const { isAuthPending } = this.state;
    const navigateToAccount = () => history.push(paths.account);
    const logout = () => {
      firebase.logout();
      history.push(paths.chapterList);
    };
    const { displayName, email } = auth;

    const username = displayName || email;

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-pale">
        <Link className="navbar-brand text-secondary" to={paths.chapterList} aria-label={'brand'}>
          {'LearnScilla'}
        </Link>

        <button className="navbar-toggler" onClick={this.toggle} aria-label={'menu'}>
          <span className="navbar-toggler-icon" />
        </button>

        <Collapse isOpen={this.state.isTogglerOpen} navbar={true}>
          <ul className="ml-auto navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === paths.chapterList ? 'active' : ''}`}
                to={paths.chapterList}
                aria-label={'tutorial'}
              >
                {t('link.tutorial')}
              </Link>
            </li>

            {!isLoaded ? null : isEmpty ? (
              <AuthModal
                login={this.signIn}
                toggleAuthModal={this.toggleAuthModal}
                isLoaded={isLoaded}
                isAuthModalOpen={isAuthModalOpen}
                isAuthPending={isAuthPending}
                t={t}
              />
            ) : (
              <AccountDropdown
                t={t}
                paths={paths}
                currentPathname={pathname}
                username={username}
                logout={logout}
                navigateToAccount={navigateToAccount}
              />
            )}

            <I18nDropdown i18n={i18n} langDictionary={langDictionary} />
          </ul>
        </Collapse>
      </nav>
    );
  }

  private toggle = () => {
    this.setState({
      isTogglerOpen: !this.state.isTogglerOpen
    });
  };

  private toggleAuthModal = () => {
    this.setState({
      isAuthPending: false
    });
    this.props.toggleAuthModal();
  };

  private signIn = async (provider: string) => {
    const { firebase } = this.props;
    const login = firebase.login;

    try {
      this.setState({ isAuthPending: true });
      await login({ provider, type: 'popup' });
    } catch (error) {
      this.setState({ isAuthPending: false });
      console.log(error);
    }
  };
}

// @ts-ignore
const withTrans = withNamespaces()(Header);
// @ts-check
const HeaderWithRouter = withRouter(withTrans);

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  isAuthModalOpen: state.auth.isAuthModalOpen
});
const mapDispatchToProps = (dispatch) => ({
  toggleAuthModal: () => dispatch(toggleAuthModal()),
  openAuthModal: () => dispatch(openAuthModal())
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(HeaderWithRouter);
