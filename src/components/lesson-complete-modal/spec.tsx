import React from 'react';
import ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import LessonCompleteModal from '.';
const t = (s) => s;
const submit = () => console.log('submit');
const closeModal = () => console.log('close modal');

describe('Cheat Sheet Modal tests', () => {
  const baseComponent = () => (
    <LessonCompleteModal t={t} isModalVisible={false} onSubmit={submit} closeModal={closeModal} />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent()).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent(), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
