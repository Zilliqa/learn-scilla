import * as React from 'react';
import './style.css';

interface IProps {
  type: ButtonType;
  ariaLabel: string;
  size?: Size;
  text?: string;
  onClick: (e?) => void;
  id?: string;
  disabled?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  className?: string;
}

type Size = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

export default class Button extends React.PureComponent<IProps, {}> {
  public static displayName = 'Button';

  public static defaultProps = {
    text: '',
    size: 'md',
    className: ''
  };

  public render() {
    const { disabled, className, onClick, before, after, text, size, ariaLabel } = this.props;

    let bsStyle;
    switch (this.props.type) {
      case 'primary':
        bsStyle = `primary`;
        break;
      case 'secondary':
        bsStyle = `outline-secondary`;
        break;
      case 'tertiary':
        bsStyle = `tertiary`;
        break;
      case 'warning':
        bsStyle = `outline-warning`;
        break;
      case 'danger':
        bsStyle = `danger`;
        break;
    }

    return (
      <button
        className={`btn btn-${size} btn-${bsStyle} ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
      >
        {before ? before : null} {text} {after ? after : null}
      </button>
    );
  }
}
