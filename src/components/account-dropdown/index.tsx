import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withFirebase } from 'react-redux-firebase';
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import * as H from 'history';
import { paths } from '../../routes';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  firebase: any;
  auth: any;
}

class AccountDropdown extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { t, auth } = this.props;
    const { displayName, email } = auth;
    const cursorStyle = { cursor: 'pointer' };
    return (
      <UncontrolledDropdown nav={true} inNavbar={true}>
        <DropdownToggle caret={true} nav={true}>
          {displayName || email}
        </DropdownToggle>
        <DropdownMenu right={true} size="sm">
          <DropdownItem
            className="text-secondary"
            style={cursorStyle}
            onClick={this.navigateToAccount}
          >
            {t('account.account')}
          </DropdownItem>
          <DropdownItem className="text-secondary" style={cursorStyle} onClick={this.logout}>
            {t('link.signOut')}
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  private logout = () => {
    const { firebase, history } = this.props;
    firebase.logout();
    history.push(paths.lessonList);
  };

  private navigateToAccount = () => {
    const { history } = this.props;
    history.push(paths.account);
  };
}

const WithTranslation = translate('translations')(AccountDropdown);

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(WithTranslation);
