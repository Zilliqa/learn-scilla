import * as React from 'react';
import { storiesOf } from '@storybook/react';
import intructionsLocalized from '../../course/instructions/en/index';
import { MemoryRouter } from 'react-router';
import ChapterList from '.';

const t = (s: string) => s;

const baseComponent = (props) => (
  <ChapterList
    ch1Progress={props.ch1Progress}
    chapterList={intructionsLocalized}
    isAuth={props.isAuth}
    progress={props.progress}
    t={t}
  />
);

storiesOf('Chapter List', module)
  .addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('auth: false (local storage)', () =>
    baseComponent({
      isAuth: false,
      ch1Progress: 1,
      progress: undefined
    })
  )
  .add('auth: true (firestore)', () =>
    baseComponent({
      isAuth: true,
      ch1Progress: 1,
      progress: { chapter1: 3 }
    })
  );
