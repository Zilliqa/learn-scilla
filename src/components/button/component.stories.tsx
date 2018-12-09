import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import Button from '.';

storiesOf('Button', module)
  .add('type', () => (
    <div>
      <Button
        type="primary"
        text={'primary'}
        onClick={() => console.log('click')}
        ariaLabel={'primary button'}
      />{' '}
      <Button
        type="secondary"
        text={'secondary'}
        onClick={() => console.log('click')}
        ariaLabel={'secondary button'}
      />{' '}
      <Button
        type="danger"
        text={'danger'}
        onClick={() => console.log('click')}
        ariaLabel={'danger button'}
      />
    </div>
  ))
  .add('disabled', () => (
    <div>
      <Button
        type="primary"
        text={'button'}
        onClick={() => console.log('click')}
        ariaLabel={'disabled primary button'}
        disabled={true}
      />{' '}
      <Button
        type="secondary"
        text={'button'}
        onClick={() => console.log('click')}
        ariaLabel={'disabled secondary button'}
        disabled={true}
      />{' '}
      <Button
        type="danger"
        text={'button'}
        onClick={() => console.log('click')}
        ariaLabel={'disabled danger button'}
        disabled={true}
      />
    </div>
  ))
  .add('size', () => (
    <div>
      <Button
        type="secondary"
        text={'small'}
        size="sm"
        onClick={() => console.log('click')}
        ariaLabel={'small button'}
      />{' '}
      <Button
        type="secondary"
        text={'medium'}
        size="md"
        disabled={false}
        onClick={() => console.log('click')}
        ariaLabel={'medium button'}
      />{' '}
      <Button
        type="secondary"
        text={'large'}
        size="lg"
        onClick={() => console.log('click')}
        ariaLabel={'large button'}
      />
    </div>
  ))
  .add('with icons', () => (
    <div>
      <Button
        icon={{ image: <FaArrowLeft />, position: 'before' }}
        type="secondary"
        text={'before'}
        onClick={() => console.log('click')}
        ariaLabel={'icon before Button'}
      />{' '}
      <Button
        icon={{ image: <FaArrowRight />, position: 'after' }}
        type="secondary"
        text={'after'}
        onClick={() => console.log('click')}
        ariaLabel={'icon after Button'}
      />{' '}
    </div>
  ));
