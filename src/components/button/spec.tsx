import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { FaCheck } from 'react-icons/fa';
import Button from '.';

describe('Footer tests', () => {
  const baseComponent = (props?: object) => (
    <Button
      type="secondary"
      text={'ButtonText'}
      disabled={false}
      onClick={() => console.log('click')}
      ariaLabel={'Test Button'}
      icon={{ image: <FaCheck />, position: 'before' }}
      size="sm"
    />
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
