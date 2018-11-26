import React from 'react';
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';
import { langDictionary } from '../../i18n';

interface IProps {
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  t: (key: string) => string;
}

export default class I18Dropdown extends React.Component<IProps, {}> {
  public render(): React.ReactNode {
    const i18n = this.props.i18n;
    const lang: string = i18n.language;
    return (
      <UncontrolledDropdown nav={true} inNavbar={true}>
        <DropdownToggle caret={true} nav={true}>
          {langDictionary[lang]}
        </DropdownToggle>
        <DropdownMenu right={true} size="sm">
          {this.renderItems()}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  private renderItems = () => {
    const cursorStyle = { cursor: 'pointer' };
    const keys = Object.keys(langDictionary);
    return keys.map((key) => (
      <DropdownItem
        key={key}
        className="text-secondary"
        style={cursorStyle}
        onClick={() => this.changeLang(key)}
      >
        {langDictionary[key]}
      </DropdownItem>
    ));
  };

  private changeLang = (lang: string) => {
    const i18n = this.props.i18n;
    i18n.changeLanguage(lang);
  };
}
