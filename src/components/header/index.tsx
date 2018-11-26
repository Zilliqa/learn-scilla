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
}

interface IStates {
  isOpen: boolean;
}

class Header extends React.Component<IProps, IStates> {
  public readonly state: IStates = {
    isOpen: false
  };

  public render(): React.ReactNode {
    const { i18n, t, auth, history, location } = this.props;
    const { isLoaded, isEmpty } = auth;
    const { pathname } = location;

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-pale">
        <Link className="navbar-brand text-secondary" to={paths.lessonList}>
          {'LearnScilla'}
        </Link>

        <button className="navbar-toggler" onClick={this.toggle}>
          <span className="navbar-toggler-icon" />
        </button>

        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <ul className="ml-auto navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === paths.lessonList ? 'active' : ''}`}
                to={paths.lessonList}
              >
                {t('link.tutorial')}
              </Link>
            </li>

            {!isLoaded ? null : isEmpty ? (
              <AuthModal t={t} />
            ) : (
              <AccountDropdown history={history} location={location} t={t} />
            )}

            <I18nDropdown i18n={i18n} t={t} />
          </ul>
        </Collapse>
      </nav>
    );
  }

  private toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}

// @ts-ignore
const withTrans = withNamespaces()(Header);
// @ts-check
const HeaderWithRouter = withRouter(withTrans);
const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(HeaderWithRouter);
