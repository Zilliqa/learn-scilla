import React from 'react';
import Layout from '../../components/layout';
import { Container } from 'reactstrap';

export class UserContainer extends React.Component<any, {}> {
  public render(): React.ReactNode {
    const { location, history } = this.props;
    return (
      <Layout location={location} history={history}>
        <Container>
          <p>Home</p>
        </Container>
      </Layout>
    );
  }
}

export default UserContainer;
