import * as React from 'react';
import { storiesOf } from '@storybook/react';
import colors from './colors';

const keyList = Object.keys(colors);
const getStyle = (key) => ({
  color: key === 'white' ? 'black' : 'white',
  backgroundColor: colors[key]
});

storiesOf('Text', module)
  .add('Typography', () => (
    <div>
      <h1>h1 Noto Sans</h1>
      <h2>h2 Noto Sans</h2>
      <h3>h3 Noto Sans</h3>
      <h4>h4 Noto Sans</h4>
      <h5>h5 Noto Sans</h5>
      <h6>h6 Noto Sans</h6>

      <p>p Noto Sans</p>
      <small>small Noto Sans</small>
    </div>
  ))
  .add('colors', () => (
    <div>
      <h3>h3 default</h3>
      <h3 className="text-secondary">h3 secondary</h3>
      <br />
      <p>p default</p>
      <p className="text-secondary">p secondary</p>
    </div>
  ));
