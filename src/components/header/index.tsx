import React from 'react';
import {
  // Collapse,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';

import { paths } from '../../routes';
import * as H from 'history';
import Collapse from 'reactstrap/lib/Collapse';
import { Link } from 'react-router-dom';
import AuthModal from '../auth/auth-modal';

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
    const { t } = this.props;

    return (
      <Navbar expand="md" color="pale" light={true}>
        <NavbarBrand href={paths.home} className="text-secondary">
          {'LearnScilla'}
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            <NavItem>
              <Link className="nav-link" to={paths.lessonList}>
                {t('link.tutorial')}
              </Link>
            </NavItem>

            <AuthModal />

            {this.renderI18nDropdown()}
          </Nav>
        </Collapse>
      </Navbar>
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
