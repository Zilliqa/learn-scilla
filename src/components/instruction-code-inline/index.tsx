import React from 'react';

interface IProps {
  value: string;
}
const InlineCode: React.SFC<IProps> = (props) => <code style={{ padding: 3 }}>{props.value}</code>;

export default InlineCode;
