import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';
export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error.message;
  }
});
const initialState = {
  rockets: [],
  isLoading: false,
  error: false,
};
export const RocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    updateReserve: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    },
    removeReserve: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.error = true;
      });
  },
});
export default RocketsSlice.reducer;
export const { updateReserve, removeReserve } = RocketsSlice.actions;
