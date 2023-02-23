import { createSlice } from '@reduxjs/toolkit';


/**
 * An example of creating entity slices, reducers and INITIAL_STATE.
 */

const INITIAL_STATE = {
  data: null,
};

export const appEntitySlice = createSlice({
  // A name, used in action types
  name: 'app',
  // The initial state for the reducer
  initialState: INITIAL_STATE,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    resetAppData: state => {
      state.data = null;
    },
  },
});

export const appEntityReducer = appEntitySlice.reducer;
