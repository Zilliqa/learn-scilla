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
  IsSubmitButton?: boolean;
}

type Size = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

export default class Button extends React.PureComponent<IProps, {}> {
  public static displayName = 'Button';

  public static defaultProps = {
    text: '',
    size: 'md',
    className: '',
    IsSubmitButton: false
  };

  public render() {
    const {
      type,
      disabled,
      className,
      onClick,
      before,
      after,
      text,
      size,
      ariaLabel,
      IsSubmitButton
    } = this.props;
    return (
      <button
        className={`btn btn-${size} type-${type} ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
        type={IsSubmitButton ? 'submit' : 'button'}
      >
        {before ? before : null} {text} {after ? after : null}
      </button>
    );
  }
}
