import React from 'react';
import ChapterNavigator from '.';
import * as renderer from 'react-test-renderer';

const goNext = () => console.log('goNext');
const goBack = () => console.log('goBack');
const t = (s: string) => s;

it('renders correctly while loading', () => {
  const tree = renderer
    .create(<ChapterNavigator chapterNumber={5} total={10} goNext={goNext} goBack={goBack} t={t} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
