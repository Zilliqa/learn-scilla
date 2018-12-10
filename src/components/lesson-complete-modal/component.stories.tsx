import * as React from 'react';
import { storiesOf } from '@storybook/react';

import LessonCompleteModal from '.';
const t = (s) => s;
const submit = () => console.log('submit');
const closeModal = () => console.log('close modal');

storiesOf('Lesson Complete Modal', module).add('default', () => (
  <LessonCompleteModal t={t} onSubmit={submit} isModalVisible={true} closeModal={closeModal} />
));
