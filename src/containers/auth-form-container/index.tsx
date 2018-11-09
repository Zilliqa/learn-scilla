import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import SigninCard from '../../components/signin-form';
import SignUpForm from '../../components/signup-form';
import ForgotPasswordForm from '../../components/forgot-password-form';
import MessageInfoCard from '../../components/message-info-card';
import './index.css';
import { signIn, signUp, requestPasswordReset } from '../../redux/user/actions';
import { translate } from 'react-i18next';
import * as H from 'history';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Card, CardBody } from 'reactstrap';
import { paths } from '../../routes';

interface IProps {
  t: (key: string) => string;
  WithNamespaces: any;
  history: H.History;
  location: H.Location;

  signUp: (body) => void;
  isSigningUp: boolean;
  isSignUpSuccessful: boolean;

  signIn: (body) => void;
  isSigningIn: boolean;
  accessToken?: string;

  requestPasswordReset: (body) => void;
  isRequestingPasswordReset: boolean;
  isRequestPasswordResetSuccessful: boolean;
}

interface IState {
  showInfoMessage: boolean;
}

export class LoginContainer extends React.Component<IProps, IState> {
  public readonly state = {
    showInfoMessage: false
  };
  public componentWillReceiveProps(nextProps) {
    const { history } = nextProps;

    const isSignInComplete = !nextProps.isSigningIn && this.props.isSigningIn;
    if (isSignInComplete) {
      const isSignInSuccessful = nextProps.accessToken;
      if (isSignInSuccessful) {
        history.push(paths.home);
      }
    }

    const isSignUpComplete = !nextProps.isSigningUp && this.props.isSigningUp;
    if (isSignUpComplete) {
      const isSignUpSuccessful = !this.props.isSignUpSuccessful && nextProps.isSignUpSuccessful;
      if (isSignUpSuccessful) {
        this.setState({ showInfoMessage: true });
      }
    }

    const isRequestComplete =
      !nextProps.isRequestingPasswordReset && this.props.isRequestingPasswordReset;
    if (isRequestComplete) {
      const isRequestSuccessful =
        !this.props.isRequestPasswordResetSuccessful && nextProps.isRequestPasswordResetSuccessful;
      if (isRequestSuccessful) {
        this.setState({ showInfoMessage: true });
      }
    }
  }

  public render(): React.ReactNode {
    const { location, history, t } = this.props;
    const { pathname } = location;
    const isSignUpPath = pathname === paths.signup;
    const isLoginPath = pathname === paths.signin;
    const isForgotPasswordPath = pathname === paths.forgotPassword;
    const { showInfoMessage } = this.state;

    const message = 'auth.checkYourEmail';

    return (
      <Layout location={location} history={history}>
        <div style={{ paddingTop: 180, paddingBottom: 200 }}>
          {isSignUpPath ? (
            showInfoMessage ? (
              <MessageInfoCard message={message} t={t} />
            ) : (
              <Row>
                <Col sm={10} md={8} lg={5} className="mr-auto ml-auto">
                  <Container>{this.renderSignUpCard()}</Container>
                </Col>
              </Row>
            )
          ) : null}

          {isLoginPath ? (
            <Row>
              <Col sm={10} md={8} lg={5} className="mr-auto ml-auto">
                <Container>{this.renderSignInCard()}</Container>
              </Col>
            </Row>
          ) : null}

          {isForgotPasswordPath ? (
            showInfoMessage ? (
              <MessageInfoCard message={message} t={t} />
            ) : (
              <Row>
                <Col sm={10} md={8} lg={5} className="mr-auto ml-auto">
                  <Container>{this.renderForgotPasswordCard()}</Container>
                </Col>
              </Row>
            )
          ) : null}
        </div>
      </Layout>
    );
  }

  private renderSignUpCard = () => {
    const { t, isSigningUp } = this.props;
    return (
      <Card className="auth-card">
        <CardBody>
          <h3 className="text-center">{t('auth.signUpTitle')}</h3>
          <br />
          <SignUpForm handleSignUp={this.signUp} isSubmitting={isSigningUp} t={t} />
          <br />
          <small>
            <Link to={paths.signin}>{t('link.signin')}</Link>
          </small>
        </CardBody>
      </Card>
    );
  };

  private renderForgotPasswordCard = () => {
    const { t, isRequestingPasswordReset } = this.props;
    return (
      <Card className="auth-card">
        <CardBody>
          <h3 className="text-center">{t('auth.forgotPasswordTitle')}</h3>
          <br />
          <ForgotPasswordForm
            handlePasswordResetRequest={this.requestPasswordReset}
            isSubmitting={isRequestingPasswordReset}
            t={t}
          />
        </CardBody>
      </Card>
    );
  };

  private renderSignInCard = () => {
    const { t, isSigningIn } = this.props;
    return (
      <Card className="auth-card">
        <CardBody>
          <h3 className="text-center">{t('auth.signInTitle')}</h3>
          <br />
          <SigninCard handleSignIn={this.signIn} isSubmitting={isSigningIn} t={t} />
          <br />
          <div className="float-left">
            <small>
              <Link to={paths.forgotPassword}>{t('link.forgotPassword')}</Link>
            </small>
          </div>
          <div className="float-right">
            <small>
              <Link to={paths.signup}>{t('link.signUp')}</Link>
            </small>
          </div>
        </CardBody>
      </Card>
    );
  };

  private signIn = (email: string, password: string): void => {
    const body = {
      email,
      password
    };
    this.props.signIn(body);
  };

  private requestPasswordReset = (email: string): void => {
    const body = {
      email
    };
    this.props.requestPasswordReset(body);
  };

  private signUp = (email: string, password: string): void => {
    const body = {
      email,
      password
    };
    this.props.signUp(body);
  };
}

const WithTranslation = translate('translations')(LoginContainer);

const mapStateToProps = (state) => ({
  isSigningIn: state.user.isSigningIn,
  isSigningUp: state.user.isSigningUp,
  isSignUpSuccessful: state.user.isSignUpSuccessful,
  isRequestingPasswordReset: state.user.isRequestingPasswordReset,
  isRequestPasswordResetSuccessful: state.user.isRequestPasswordResetSuccessful,
  accessToken: state.persist.accessToken
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (body) => dispatch(signIn(body)),
  signUp: (body) => dispatch(signUp(body)),
  requestPasswordReset: (body) => dispatch(requestPasswordReset(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
