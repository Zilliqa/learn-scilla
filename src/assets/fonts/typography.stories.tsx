import * as React from 'react';
import { storiesOf } from '@storybook/react';

const getFontWeight = (fontWeight) => ({ fontWeight });
storiesOf('Typography', module)
  .add('levels', () => (
    <div>
      <h1>h1 Noto Sans</h1>
      <h2>h2 Noto Sans</h2>
      <h3>h3 Noto Sans</h3>
      <h4>h4 Noto Sans</h4>
      <h5>h5 Noto Sans</h5>
      <h6>h6 Noto Sans</h6>
      <a>a Noto Sans</a>
      <p>p Noto Sans</p>
      <span>span Noto Sans</span>
      <br />
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
  ))
  .add('font weights', () => (
    <div>
      <h1 className="text-secondary" style={getFontWeight(300)}>
        h1 300 Noto Sans Light
      </h1>
      <h1 className="text-secondary" style={getFontWeight(400)}>
        h1 400 Noto Sans Regular
      </h1>
      <h1 className="text-secondary" style={getFontWeight(700)}>
        h1 700 Noto Sans Bold
      </h1>

      <p className="text-secondary" style={getFontWeight(300)}>
        p 300 Noto Sans Light
      </p>
      <p className="text-secondary" style={getFontWeight(400)}>
        p 400 Noto Sans Regular
      </p>
      <p className="text-secondary" style={getFontWeight(700)}>
        p 700 Noto Sans Bold
      </p>
    </div>
  ));
