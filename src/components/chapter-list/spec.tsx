import React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import intructionsLocalized from '../../locales/instructions/en/index';
import ChapterList from '.';

const t = (s: string) => s;
const navigate = (chapterNum, lessonNum) => console.log('navigate', chapterNum, lessonNum);

describe('Chapter Complete Card tests', () => {
  const baseComponent = (props) => (
    <ChapterList
      ch1Progress={props.ch1Progress}
      chapterList={intructionsLocalized}
      isAuth={props.isAuth}
      progress={props.progress}
      navigate={navigate}
      t={t}
    />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer
        .create(baseComponent({ isAuth: true, ch1Progress: 1, progress: { chapter1: 3 } }))
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders the component when auth is false', () => {
      const wrapper = shallow(
        baseComponent({ isAuth: false, ch1Progress: 1, progress: undefined })
      );
      const assertion = wrapper.find('[data-test-id="chapter-list"]').length;
      expect(assertion).toBe(1);
    });

    it('renders the component when auth is true', () => {
      const wrapper = shallow(
        baseComponent({ isAuth: true, ch1Progress: 1, progress: { chapter1: 3 } })
      );
      const assertion = wrapper.find('[data-test-id="chapter-list"]').length;
      expect(assertion).toBe(1);
    });
  });
});
