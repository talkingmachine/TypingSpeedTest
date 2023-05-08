import { createReducer } from '@reduxjs/toolkit';
import { checkMaxInARow, incCorrectAnswers, incMistakes, resetStats, setFutureSentence, setFutureToCurrentSentence, setName, setTimerSeconds } from './actions';

const initialState = {
  name: 'Name', //TODO remove consts
  timerSeconds: 0,
  sentences: {
    current: '',
    future: ''
  },
  mistakes: 0,
  correctAnswers: 0,
  maxInARow: 0
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setName, (state, action) => {
      state.name = action.payload;
    })
    .addCase(setTimerSeconds, (state, action) => {
      state.timerSeconds = action.payload;
    })
    .addCase(setFutureSentence, (state, action) => {
      state.sentences.future = action.payload;
    })
    .addCase(setFutureToCurrentSentence, (state) => {
      state.sentences.current = state.sentences.future;
    })
    .addCase(incMistakes, (state) => {
      state.mistakes += 1;
    })
    .addCase(incCorrectAnswers, (state) => {
      state.correctAnswers += 1;
    })
    .addCase(checkMaxInARow, (state, action) => {
      state.maxInARow = Math.max(state.maxInARow, action.payload);
    })
    .addCase(resetStats, (state) => {
      state.correctAnswers = 0;
      state.mistakes = 0;
      state.timerSeconds = 0;
    });

});

export {reducer};