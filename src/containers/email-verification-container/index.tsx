import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import MessageInfoCard from '../../components/message-info-card';
import { changeQueryStringToJSON } from '../../utils/helpers';
import { verifyEmail } from '../../redux/user/actions';
import { translate } from 'react-i18next';
import Spinner from '../../components/spinner';
import * as H from 'history';

interface IProps {
  t: (key: string) => string;
  history: H.History;
  location: H.Location;
  isVerifyingEmail: boolean;
  isEmailVerified: boolean;
  errorMessage?: string;
  verifyEmail: (body) => void;
}

export class TokenVerificationCardContainer extends React.Component<IProps, {}> {
  public componentDidMount() {
    const location = this.props.location;
    if (location !== undefined) {
      const search: string = location.search.slice(1);

      const params = changeQueryStringToJSON(search);
      const token: string = params.token;
      const tokenBody = { token };
      this.props.verifyEmail(tokenBody);
    }
  }

  public render(): React.ReactNode {
    const { location, history, t, isVerifyingEmail, isEmailVerified, errorMessage } = this.props;

    let message = errorMessage || t('emailVerificationCard.unknownError');
    if (isEmailVerified) {
      message = t('emailVerificationCard.verifiedMsg');
    }
    return (
      <Layout location={location} history={history}>
        <div className="blanket">
          <div style={{ paddingTop: 100, paddingBottom: 150 }}>
            {isVerifyingEmail ? <Spinner /> : <MessageInfoCard t={t} message={message} />}
          </div>
        </div>
      </Layout>
    );
  }
}
const WithTranslation = translate('translations')(TokenVerificationCardContainer);

const mapStateToProps = (state) => ({
  isVerifyingEmail: state.user.isVerifyingEmail,
  isEmailVerified: state.user.isEmailVerified,
  errorMessage: state.user.errorMessage
});

const mapDispatchToProps = (dispatch) => ({
  verifyEmail: (body) => dispatch(verifyEmail(body))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithTranslation);
