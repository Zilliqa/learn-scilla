import React from 'react';

import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import * as H from 'history';
import AuthModal from '../auth-modal';
import I18nDropdown from '../i18n-dropdown';

import Collapse from 'reactstrap/lib/Collapse';

interface IHeaderProps {
  history: H.History;
  location: H.Location;
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  t: (key: string) => string;
}

interface IHeaderStates {
  isOpen: boolean;
  color: string;
}

export default class Header extends React.Component<IHeaderProps, IHeaderStates> {
  public readonly state: IHeaderStates = {
    color: '',
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
