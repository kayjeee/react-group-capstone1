import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MissionsReducer from './missions/missionSlice';
import rocketReducer from './rockets/rocketSlice';

const rootReducer = combineReducers({
  missions: MissionsReducer,
  rockets: rocketReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    logger,
    thunk,
  ),
);

export default store;
