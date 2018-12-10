import * as React from 'react';
import { storiesOf } from '@storybook/react';
import intructionsLocalized from '../../course/instructions/en/index';
import { MemoryRouter } from 'react-router';
import ChapterList from '.';

const t = (s: string) => s;

const baseComponent = (props) => (
  <ChapterList
    chapterList={intructionsLocalized}
    isAuth={props.isAuth}
    progress={props.progress}
    t={t}
  />
);

storiesOf('Chapter List', module)
  .addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('auth: false', () =>
    baseComponent({
      isAuth: false,
      progress: undefined
    })
  )
  .add('auth: true', () =>
    baseComponent({
      isAuth: true,
      progress: { chapter1: 3 }
    })
  );
