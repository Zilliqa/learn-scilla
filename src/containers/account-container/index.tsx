import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import { withFirebase } from 'react-redux-firebase';
import Layout from '../../components/layout';
import * as H from 'history';

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Card from 'reactstrap/lib/Card';
import Spinner from '../../components/spinner';
import { paths } from '../../routes';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  firebase: any;
  auth: any;
}

class AccountContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { auth, t } = this.props;
    const { displayName, email, createdAt, isLoaded } = auth;
    const documentTitle = `LearnScilla - Account`;

    return (
      <Layout>
        <Helmet>
          <title>{documentTitle}</title>
        </Helmet>
        <div className="container">
          <Row className="py-5">
            <Col sm={10} md={8} lg={5} className="mr-auto ml-auto text-center">
              <Card body={true} outline={true} color="secondary">
                {isLoaded ? (
                  <div className="py-5 text-secondary">
                    {displayName === undefined ? null : <p>{displayName}</p>}
                    <p>{email}</p>
                    {createdAt === undefined ? null : (
                      <p>Since {new Date(parseInt(createdAt, 10)).toLocaleDateString()}</p>
                    )}
                    <br />
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={this.deleteAccount}
                    >
                      <small>{t('account.deleteAccount')}</small>
                    </button>
                  </div>
                ) : (
                  <Spinner />
                )}
              </Card>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }

  private deleteAccount = () => {
    const { firebase } = this.props;
    const user = firebase.auth().currentUser;

    const providerData = user.providerData[0];
    const { providerId } = providerData;

    if (providerId === 'github.com') {
      this.deleteGitHubAccount();
    } else if (providerId === 'google.com') {
      this.deleteGoogleAccount();
    } else {
      alert('Auth Provider Not Found');
    }
  };

  private deleteGitHubAccount = async () => {
    const { firebase } = this.props;
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { credential } = result;
      const { accessToken } = credential;
      const userCredential = firebase.auth.GithubAuthProvider.credential(accessToken);
      return this.deleteWithCredential(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  private deleteGoogleAccount = async () => {
    const { firebase } = this.props;
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { credential } = result;
      const { idToken } = credential;
      const userCredential = firebase.auth.GoogleAuthProvider.credential(idToken);
      return this.deleteWithCredential(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  private deleteWithCredential = async (credential) => {
    const { firebase, history } = this.props;
    const user = firebase.auth().currentUser;
    try {
      await user.reauthenticateAndRetrieveDataWithCredential(credential);
      await user.delete();
      alert('Your account has been deleted');
      return history.push(paths.lessonList);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}

// @ts-ignore
const WithTranslation = withNamespaces()(AccountContainer);
// @ts-check
const mapStateToProps = (state) => ({
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    undefined
  )
)(WithTranslation);
