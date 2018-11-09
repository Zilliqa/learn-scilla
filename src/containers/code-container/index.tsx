import React from 'react';
import Layout from '../../components/layout';
import { Col, Row } from 'reactstrap';
import Steps, { Step } from 'rc-steps';

import CodeLesson from '../../components/code-lesson';
import CodeEditor from '../../components/code-editor';
import CodeDiff from '../../components/code-diff';
export class CodeContainer extends React.Component<any, {}> {
  public render(): React.ReactNode {
    const { location, history } = this.props;
    return (
      <Layout location={location} history={history}>
        <Steps progressDot={true} size="small" current={1}>
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <CodeLesson lesson={`## Title \n ### Subtitle \n * item1`} />
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <CodeEditor code={code} />
            <CodeDiff original={original} code={code} />
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default CodeContainer;

const original = `(* HelloWorld contract *)
let one_msg =
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg
  Cons {Message} msg nil_msg
`;

const code = `(* HelloWorld contract *)
let one_msg =
  fun (msg : Message) =>
  let nil_msg = Nil {Message} in
  Cons {Message} msg nil_msg
`;
