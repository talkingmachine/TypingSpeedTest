import { createReducer } from '@reduxjs/toolkit';
import { setName } from './actions';

const initialState = {
  name: 'Name', //TODO remove consts
  currentSentence: 'something longg',
  totalChars: 1234,
  userClicks: 1500,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setName, (state, action) => {
      state.name = action.payload;
    });
});

export {reducer};