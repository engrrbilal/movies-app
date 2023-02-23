import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PAGINATION } from '../../../constants/movie';
import { SLICE_NAME } from '../../../constants/redux-slices';


const INITIAL_STATE = {
  data: {
    movies:[],
    pagination: DEFAULT_PAGINATION,
    movie:{},
  },
};

export const moviesEntitySlice = createSlice({
  name: SLICE_NAME.MOVIES,
  initialState: INITIAL_STATE,
  reducers: {
    updateMoviesListData : (state, action) => {
      const { results, total_pages } = action.payload;
      state.data.movies =results;
      state.data.pagination = {...state.data.pagination, total_pages};
    },
    updatePagination : (state, action) => {
      state.data.pagination = action?.payload;
    },
    upateMovieData: (state, action) => {
      state.data.movie = action?.payload;
  },
  },
});

export const { updateMoviesListData , updatePagination, upateMovieData} = moviesEntitySlice.actions;
export const moviesEntityReducer = moviesEntitySlice.reducer;
