import { createSlice } from '@reduxjs/toolkit';
import { SLICE_NAME } from '../../../constants/redux-slices';


const INITIAL_STATE = {
  data: {
    query: '',
    catType: 'trending',
  },
};

export const moviesFeatureSlice = createSlice({
  name: SLICE_NAME.MOVIES,
  initialState: INITIAL_STATE,
  reducers: {
    updateSearchQuery: (state, action) => {
      state.data.query = action?.payload;
    },
    updateMoviesType: (state, action) => {
        state.data.catType = action?.payload;
    },
  },
});

export const { updateSearchQuery, updateMoviesType } = moviesFeatureSlice.actions;
export const moviesFeatureReducer = moviesFeatureSlice.reducer;
