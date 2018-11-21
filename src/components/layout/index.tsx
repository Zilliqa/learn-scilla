import React from 'react';
import { translate } from 'react-i18next';
import Footer from '../footer';
import Header from '../header';
import { Container } from 'reactstrap';
import * as H from 'history';

interface IProps {
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  t: (key: string) => string;
  firebase: any; // TODO: specify type
  auth: { isLoaded: boolean; isEmpty: boolean };
  history: H.History;
  location: H.Location;
  children?: React.ReactNode;
  accessToken?: string;
  removeAccessToken: () => void;
}

const Layout: React.SFC<IProps> = (props) => {
  const { history, location, children, t, i18n } = props;
  return (
    <div>
      <Header i18n={i18n} t={t} history={history} location={location} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};

export default translate('translations')(Layout);
