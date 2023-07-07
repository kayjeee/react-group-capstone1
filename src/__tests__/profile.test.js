import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import MyProfile from '../components/myProfile';
import store from '../features/store';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
