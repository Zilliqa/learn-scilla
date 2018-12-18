import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { FaCheck } from 'react-icons/fa';
import Button from '.';

describe('Footer tests', () => {
  const baseComponent = (props) => (
    <Button
      type={props.type}
      text={'ButtonText'}
      disabled={false}
      onClick={() => console.log('click')}
      ariaLabel={'Test Button'}
      icon={{ image: <FaCheck />, position: 'before' }}
      size={'md'}
    />
  );

  describe('basic tests', () => {
    it('matches the snapshot', () => {
      const tree = renderer.create(baseComponent({ type: 'secondary' })).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders primary button without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ type: 'primary' }), div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders secondary button without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ type: 'secondary' }), div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders warning button crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ type: 'warning' }), div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('renders danger button without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(baseComponent({ type: 'danger' }), div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
