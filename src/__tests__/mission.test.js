import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../features/store';
import Missions from '../components/missions';

describe('User Interactions test', () => {
  it('will test user interaction', async () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
