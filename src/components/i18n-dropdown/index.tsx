import React from 'react';
import { UncontrolledDropdown } from 'reactstrap/lib/Uncontrolled';
import DropdownToggle from 'reactstrap/lib/DropdownToggle';
import DropdownMenu from 'reactstrap/lib/DropdownMenu';
import DropdownItem from 'reactstrap/lib/DropdownItem';

interface IProps {
  i18n: {
    language: string;
    changeLanguage: (lang: string) => void;
  };
  langDictionary: object;
}

const I18Dropdown: React.SFC<IProps> = (props) => {
  const { langDictionary, i18n } = props;
  const lang: string = i18n.language;

  const cursorStyle = { cursor: 'pointer' };
  const keys = Object.keys(langDictionary);

  return (
    <UncontrolledDropdown nav={true} inNavbar={true}>
      <DropdownToggle caret={true} nav={true}>
        {langDictionary[lang]}
      </DropdownToggle>
      <DropdownMenu right={true} size="sm">
        {keys.map((key) => (
          <DropdownItem
            key={key}
            className="text-secondary"
            style={cursorStyle}
            onClick={() => i18n.changeLanguage(key)}
          >
            {langDictionary[key]}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default I18Dropdown;
