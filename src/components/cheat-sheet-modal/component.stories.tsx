import * as React from 'react';
import { storiesOf } from '@storybook/react';
import './style.css';
import CheatSheetModal from '.';

const t = (s: string) => s;

const baseComponent = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-pale">
    <ul className="ml-auto navbar-nav">
      <CheatSheetModal buttonType="secondary" t={t} />
    </ul>
  </nav>
);

storiesOf('component.CheatSheetModal', module).add('Cheat Sheet Modal', () => baseComponent());
