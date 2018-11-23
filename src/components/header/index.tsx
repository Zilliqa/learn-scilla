import React from 'react';

import { Link } from 'react-router-dom';
import { paths } from '../../routes';
import * as H from 'history';
import AuthModal from '../auth/auth-modal';

import Collapse from 'reactstrap/lib/Collapse';
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';

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
            {this.renderI18nDropdown()}
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

  private renderI18nDropdown = () => {
    const i18n = this.props.i18n;
    const lang: string = i18n.language;

    const LANG = {
      en: 'English',
      ko: '한국어'
    };

    const cursorStyle = { cursor: 'pointer' };

    return (
      <UncontrolledDropdown nav={true} inNavbar={true}>
        <DropdownToggle caret={true} nav={true}>
          {LANG[lang]}
        </DropdownToggle>
        <DropdownMenu right={true} size="sm">
          <DropdownItem style={cursorStyle} onClick={() => i18n.changeLanguage('en')}>
            {'English'}
          </DropdownItem>
          <DropdownItem style={cursorStyle} onClick={() => i18n.changeLanguage('ko')}>
            {'한국어'}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
}
