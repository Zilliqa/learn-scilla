import React from 'react';
import {
  // Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
import { translate } from 'react-i18next';
import { paths } from '../../routes';
import * as H from 'history';
import Collapse from 'reactstrap/lib/Collapse';
import { Link } from 'react-router-dom';

interface IRoutes {
  path: string;
  component: React.ReactNode;
  label?: string;
}

interface IHeaderProps {
  history: H.History;
  location: H.Location;
  routeList: IRoutes[];
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  t: (key: string) => string;
  isAuth: boolean;
  logout: () => void;
}

interface IHeaderStates {
  isOpen: boolean;
  color: string;
}

class Header extends React.Component<IHeaderProps, IHeaderStates> {
  public readonly state: IHeaderStates = {
    color: '',
    isOpen: false
  };
  public componentDidMount() {
    const i18n = this.props.i18n;
    i18n.changeLanguage('en');
  }
  public render(): React.ReactNode {
    const { isAuth, logout, routeList } = this.props;

    const { pathname } = this.props.location;
    const links = routeList.filter((item) => item.label).map((item) => (
      <NavItem key={item.path}>
        <Link to={item.path} className={`nav-link ${pathname === item.path ? 'active' : ''}`}>
          {item.label}
        </Link>
      </NavItem>
    ));

    return (
      <Navbar expand="md" color="dark" dark={true} fixed={'top'}>
        <div className="navbar-wrapper">
          <NavbarBrand href={paths.home}>{'Learn Scilla'}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </div>
        <Collapse isOpen={this.state.isOpen} navbar={true}>
          <Nav className="ml-auto" navbar={true}>
            {links}
            {isAuth ? (
              <NavItem>
                <NavLink onClick={logout} style={{ cursor: 'pointer' }}>
                  {'Logout'}
                </NavLink>
              </NavItem>
            ) : null}
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
    return (
      <UncontrolledDropdown nav={true} inNavbar={true}>
        <DropdownToggle caret={true} nav={true}>
          {lang}
        </DropdownToggle>
        <DropdownMenu right={true} size="sm">
          <DropdownItem onClick={() => i18n.changeLanguage('en')}>{'English'}</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };
}

export default translate('translations')(Header);
