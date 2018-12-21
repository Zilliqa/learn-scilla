import * as React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import chaptersAddon from 'react-storybook-addon-chapters';

import Button from '.';

const options = {
  showSource: false,
  showPropTables: false,
  allowPropTablesToggling: false
};

setAddon(chaptersAddon);
storiesOf('Button', module)
  // @ts-ignore
  .addWithChapters('Types', {
    subtitle: 'Different types of button',
    chapters: [
      {
        info: '4 types: primary, secondary, warning, and danger.',
        sections: [
          {
            options,
            sectionFn: () => (
              <div>
                <Button
                  type="primary"
                  text={'primary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'primary button'}
                />{' '}
                <Button
                  type="primary"
                  text={'primary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled primary button'}
                  disabled={true}
                />{' '}
                <Button
                  type="secondary"
                  text={'secondary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'secondary button'}
                />{' '}
                <Button
                  type="secondary"
                  text={'secondary'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled secondary button'}
                  disabled={true}
                />{' '}
                <Button
                  type="warning"
                  text={'warning'}
                  onClick={() => console.log('click')}
                  ariaLabel={'warning button'}
                />{' '}
                <Button
                  type="warning"
                  text={'warning'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled warning button'}
                  disabled={true}
                />{' '}
                <Button
                  type="danger"
                  text={'danger'}
                  onClick={() => console.log('click')}
                  ariaLabel={'danger button'}
                />{' '}
                <Button
                  type="danger"
                  text={'danger'}
                  onClick={() => console.log('click')}
                  ariaLabel={'disabled danger button'}
                  disabled={true}
                />{' '}
                <Button
                  type="transparent"
                  text={'transparent'}
                  onClick={() => console.log('click')}
                  ariaLabel={'transparent button'}
                />{' '}
                <Button
                  type="transparent"
                  text={'transparent'}
                  onClick={() => console.log('click')}
                  ariaLabel={'transparent button'}
                  disabled={true}
                />
              </div>
            )
          }
        ]
      }
    ]
  })
  .addWithChapters('Sizes', {
    subtitle: 'Different Sizes of button',
    chapters: [
      {
        info: '3 sizes: small, medium, and large.',
        sections: [
          {
            options,
            sectionFn: () => (
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
            )
          }
        ]
      }
    ]
  })
  .addWithChapters('Composition', {
    chapters: [
      {
        info: '3 possible compositions: after, before, and both',
        sections: [
          {
            options,
            sectionFn: () => (
              <div>
                <Button
                  before={<FaArrowLeft />}
                  type="secondary"
                  text={'before'}
                  onClick={() => console.log('click')}
                  ariaLabel={'icon before Button'}
                />{' '}
                <Button
                  after={<FaArrowRight />}
                  type="secondary"
                  text={'after'}
                  onClick={() => console.log('click')}
                  ariaLabel={'icon after Button'}
                />{' '}
                <Button
                  before={<FaArrowLeft />}
                  after={<FaArrowRight />}
                  type="secondary"
                  text={'before and after'}
                  onClick={() => console.log('click')}
                  ariaLabel={'icon before and after Button'}
                />{' '}
              </div>
            )
          }
        ]
      }
    ]
  });
