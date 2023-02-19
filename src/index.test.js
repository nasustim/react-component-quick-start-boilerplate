import renderer from 'react-test-renderer';
import Component from '.';

it('rendered successfully', () => {
  renderer.create(
    <Component />,
  );
});