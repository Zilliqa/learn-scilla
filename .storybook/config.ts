import 'bootstrap/dist/css/bootstrap.css';
import { withOptions } from '@storybook/addon-options';
import { configure, addDecorator } from '@storybook/react';
import './storybook.css';
import '../src/index.css';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

// Option defaults:
addDecorator(
  withOptions({
    /**
     * name to display in the top left corner
     * @type {String}
     */
    name: 'LEARN-SCILLA',
    /**
     * URL for name in top left corner to link to
     * @type {String}
     */
    url: 'https://github.com/noelyoo/learn-scilla'
  })
);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
