import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
    },

    leaveMission: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
    },

  },

  extraReducers: (builders) => {
    builders.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
    });
    builders.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      const data = action.payload;
      const missions = data.map((index) => ({
        mission_id: index.mission_id,
        mission_name: index.mission_name,
        description: index.description,
      }));
      state.missions = missions;
    });
    builders.addCase(fetchMissions.rejected, (state) => {
      state.isLoading = false;
    });
  },

});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
