import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
import 'bootstrap/dist/css/bootstrap.css';
import '../src/index.css';

const req = require.context('../src', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
