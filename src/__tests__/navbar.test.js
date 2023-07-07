import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/navBar';

test('make snapshots on the nav', () => {
  const tree = renderer.create(<MemoryRouter><NavBar /></MemoryRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
