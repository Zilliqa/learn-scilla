import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { langDictionary } from '../../i18n';
import I18nDropdown from '.';
import i18n from '../../i18n';

describe('i18n Dropdown tests', () => {
  const baseComponent = () => <I18nDropdown i18n={i18n} langDictionary={langDictionary} />;

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent(), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
