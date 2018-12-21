import * as React from 'react';
import { storiesOf } from '@storybook/react';

import LessonCompleteModal from '.';
const t = (s) => s;
const submit = () => console.log('submit');
const closeModal = () => console.log('close modal');

storiesOf('component.LessonCompleteModal', module).add('Lesson Complete Modal', () => (
  <LessonCompleteModal t={t} onSubmit={submit} isModalVisible={true} closeModal={closeModal} />
));
