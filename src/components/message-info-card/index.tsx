import React from 'react';
import { Col, Row, Card, CardBody, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { paths } from '../../routes';

interface IProps {
  t: (key: string) => string;
  message: string;
}

export default class SignupCheckEmailCard extends React.Component<IProps, {}> {
  public render() {
    const { message, t } = this.props;
    return (
      <Row>
        <Col sm={10} md={8} lg={5} className="mr-auto ml-auto">
          <Container>
            <Card className="signup-card">
              <CardBody>
                <br />
                <div className="text-center">
                  <p>{t(message)}</p>
                </div>
                <div className="text-center">
                  <small>
                    <Link to={paths.signin}>{t('link.signin')}</Link>
                  </small>
                </div>
                <br />
              </CardBody>
            </Card>
          </Container>
        </Col>
      </Row>
    );
  }
}
