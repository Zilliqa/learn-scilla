import * as React from 'react';
import { storiesOf } from '@storybook/react';
import colors from './colors';

const keyList = Object.keys(colors);
const getStyle = (key) => ({
  color: key === 'white' ? 'black' : 'white',
  backgroundColor: colors[key]
});

storiesOf('Colors', module).add('All Colors', () => (
  <div>
    {keyList.map((key) => {
      return (
        <p key={key} className="text-center justify-content-center py-2" style={getStyle(key)}>
          {key}
          <br />
          <small>{colors[key]}</small>
        </p>
      );
    })}
  </div>
));
