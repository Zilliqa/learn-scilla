import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { translate } from 'react-i18next';
import { withFirebase } from 'react-redux-firebase';
import Layout from '../../components/layout';

import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Card from 'reactstrap/lib/Card';
import Spinner from '../../components/spinner';

interface IProps {
  t: (key: string) => string;
  firebase: any;
  auth: any;
}

class AccountContainer extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const { auth } = this.props;
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
}

const WithTranslation = translate('translations')(AccountContainer);

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth
});

export default compose(
  withFirebase,
  connect(
    mapStateToProps,
    undefined
  )
)(WithTranslation);
