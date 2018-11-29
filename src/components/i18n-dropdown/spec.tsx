import React from 'react';
import I18nDropdown from '.';
import { langDictionary } from '../../i18n';
import * as renderer from 'react-test-renderer';
import i18n from '../../i18n';

it('renders correctly', () => {
  const tree = renderer
    .create(<I18nDropdown i18n={i18n} langDictionary={langDictionary} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
