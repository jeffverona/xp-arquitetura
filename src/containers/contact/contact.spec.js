import React from 'react';
import Contacts from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Contacts />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
