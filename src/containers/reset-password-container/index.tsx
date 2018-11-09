import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import PasswordResetForm from '../../components/reset-password-form';
import { changeQueryStringToJSON } from '../../utils/helpers';
import { resetPassword } from '../../redux/user/actions';
import { translate } from 'react-i18next';
import MessageInfoCard from '../../components/message-info-card';

import { Link } from 'react-router-dom';
import { Col, Row, Container, Card, CardBody } from 'reactstrap';
import { paths } from '../../routes';
import * as H from 'history';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;

  isResetSuccessful: boolean;
  isResetting: boolean;

  resetPassword: (body) => void;
}

interface IState {
  showInfoMessage: boolean;
}

export class ResetPasswordContainer extends React.Component<IProps, IState> {
  public readonly state = {
    showInfoMessage: false
  };
  public componentWillReceiveProps(nextProps) {
    const isResetComplete = !nextProps.isResetting && this.props.isResetting;
    if (isResetComplete) {
      const isResetSuccessful = !this.props.isResetSuccessful && nextProps.isResetSuccessful;
      if (isResetSuccessful) {
        this.setState({ showInfoMessage: true });
      }
    }
  }

  public render(): React.ReactNode {
    const { location, history, t } = this.props;
    const { showInfoMessage } = this.state;
    const message = t('auth.passwordResetSuccessMessage');
    return (
      <Layout location={location} history={history}>
        <div className="blanket">
          <div style={{ paddingTop: 180, paddingBottom: 200 }}>
            {showInfoMessage ? (
              <MessageInfoCard message={message} t={t} />
            ) : (
              <Row>
                <Col sm={10} md={8} lg={5} className="mr-auto ml-auto">
                  <Container>{this.renderResetPasswordCard()}</Container>
                </Col>
              </Row>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  private renderResetPasswordCard = () => {
    const { t } = this.props;
    return (
      <Card className="auth-card">
        <CardBody>
          <h3 className="text-center">{t('auth.passwordResetTitle')}</h3>
          <br />
          <PasswordResetForm t={t} handleResetPassword={this.resetPassword} />
          <br />
          <small>
            <Link to={paths.signin}>{t('link.signin')}</Link>
          </small>
        </CardBody>
      </Card>
    );
  };

  private resetPassword = (password: string) => {
    const location = this.props.location;
    const search: string = location.search.slice(1);
    const params = changeQueryStringToJSON(search);
    const token: string = params.token;
    const tokenBody = { token, password };
    if (token === undefined) {
      return console.error('token not found');
    }
    this.props.resetPassword(tokenBody);
  };
}
const WithTranslation = translate('translations')(ResetPasswordContainer);

const mapStateToProps = (state) => ({
  isResetSuccessful: state.user.isResetSuccessful,
  isResetting: state.user.isResetting
});

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (body) => dispatch(resetPassword(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
