import React from 'react';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as H from 'history';
import Collapse from 'reactstrap/lib/Collapse';
import AuthModal from '../auth-modal';
import { paths } from '../../routes';
import I18nDropdown from '../i18n-dropdown';

interface IProps {
  history: H.History;
  location: H.Location;
  t: (key: string) => string;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
}

interface IStates {
  isOpen: boolean;
}

class Header extends React.Component<IProps, IStates> {
  public readonly state: IStates = {
    isOpen: false
  };

  public render(): React.ReactNode {
    const { i18n, t } = this.props;
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
            <AuthModal />
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

const withTrans = translate('translations')(Header);
export default withRouter(withTrans);
