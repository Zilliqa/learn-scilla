import React from 'react';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import Dropdown from 'reactstrap/lib/Dropdown';
import Button from '../button';

interface IProps {
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  langDictionary: object;
}

interface IState {
  dropdownOpen: boolean;
}

class I18Dropdown extends React.Component<IProps, IState> {
  public readonly state: IState = {
    dropdownOpen: false
  };

  public render() {
    const { langDictionary, i18n } = this.props;
    const lang: string = i18n.language;
    const keys = Object.keys(langDictionary);

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} nav={true} inNavbar={true}>
        <DropdownToggle caret={true} nav={true}>
          {langDictionary[lang]}
        </DropdownToggle>
        <DropdownMenu right={true} size="sm">
          {keys.map((key) => (
            <Button
              key={key}
              className="btn-block"
              type="transparent"
              text={langDictionary[key]}
              onClick={() => this.selectLanguage(key)}
              ariaLabel={langDictionary[key]}
            />
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
  private toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  private selectLanguage = (key) => {
    const { i18n } = this.props;

    i18n.changeLanguage(key);
    this.setState({ dropdownOpen: false });
  };
}

export default I18Dropdown;
