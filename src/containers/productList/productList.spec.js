import React from 'react';
import ProductList from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ProductList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
