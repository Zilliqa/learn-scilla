import React from 'react';

import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import Dropdown from 'reactstrap/lib/Dropdown';
import Button from '../button';

interface IProps {
  t: (key: string) => string;
  username: string;
  paths: any;
  currentPathname: string;
  navigateToAccount: () => void;
  logout: () => void;
}

interface IState {
  dropdownOpen: boolean;
}
class AccountDropdown extends React.Component<IProps, IState> {
  public readonly state: IState = {
    dropdownOpen: false
  };
  public render() {
    const { t, username, paths, currentPathname, navigateToAccount, logout } = this.props;

    const isAccountPath = currentPathname === paths.account;

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} nav={true} inNavbar={true}>
        <DropdownToggle caret={true} nav={true} className={isAccountPath ? 'active' : ''}>
          {username}
        </DropdownToggle>
        <DropdownMenu right={true} size="sm">
          <Button
            type="transparent"
            className="btn-block text-left"
            text={t('account.account')}
            onClick={navigateToAccount}
            ariaLabel={t('account.account')}
          />
          <Button
            type="transparent"
            className="btn-block text-left"
            text={t('link.signOut')}
            onClick={logout}
            ariaLabel={t('link.signOut')}
          />
        </DropdownMenu>
      </Dropdown>
    );
  }
  private toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
}

export default AccountDropdown;
