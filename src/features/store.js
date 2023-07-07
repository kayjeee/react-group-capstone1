import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
