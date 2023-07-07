import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import store from '../features/store';
import Rockets from '../components/rockets';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
