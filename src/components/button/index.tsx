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
  icon?: { image: React.ReactNode; position: 'before' | 'after' };
  className?: string;
}

type Size = 'lg' | 'md' | 'sm';
export type ButtonType = 'primary' | 'secondary' | 'warning' | 'danger' | 'transparent';

export default class Button extends React.PureComponent<IProps, {}> {
  public static displayName = 'Button';

  public static defaultProps = {
    text: '',
    size: 'md',
    className: ''
  };

  public render() {
    const { disabled, className, onClick, icon, text, size, ariaLabel } = this.props;

    let bsStyle;
    switch (this.props.type) {
      case 'primary':
        bsStyle = `primary`;
        break;
      case 'secondary':
        bsStyle = `outline-secondary`;
        break;
      case 'warning':
        bsStyle = `outline-warning`;
        break;
      case 'danger':
        bsStyle = `danger`;
        break;
      case 'transparent':
        bsStyle = `transparent`;
        break;
    }

    let position = 'before';

    if (icon && icon.position) {
      position = icon.position;
    }
    let image;
    if (icon && icon.image) {
      image = icon.image ? icon.image : null;
    }
    const isBefore = position === 'before';

    return (
      <button
        className={`btn btn-${size} btn-${bsStyle} ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
        disabled={disabled}
      >
        {isBefore ? image : null} {text} {isBefore ? null : image}
      </button>
    );
  }
}
