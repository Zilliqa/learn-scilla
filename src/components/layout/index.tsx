import React from 'react';
import { connect } from 'react-redux';
import Footer from '../footer';
import Header from '../header';
import * as userActions from '../../redux/user/actions';
import { routeList } from '../../routes';
import { Container } from 'reactstrap';
import * as H from 'history';
import styles from './layout.module.css';

interface ILayoutProps {
  history: H.History;
  location: H.Location;
  children?: React.ReactNode;
  accessToken?: string;
  removeAccessToken: () => void;
}

class Layout extends React.Component<ILayoutProps, {}> {
  public render() {
    const { history, location, children, accessToken, removeAccessToken } = this.props;
    const isAuth = accessToken !== undefined;

    return (
      <div>
        <Header
          history={history}
          location={location}
          isAuth={isAuth}
          routeList={routeList}
          logout={removeAccessToken}
          background={'transparent'}
        />
        <Container className={styles.container}>{children}</Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.persist.accessToken
});

const mapDispatchToProps = (dispatch) => ({
  removeAccessToken: () => dispatch(userActions.removeAccessToken())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
