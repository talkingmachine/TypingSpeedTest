import { createAction } from '@reduxjs/toolkit';

export const setName = createAction<string>('setName');
export const setTimerSeconds = createAction<number>('setTimerSeconds');
export const setFutureSentence = createAction<string>('setFutureSentence');
export const setFutureToCurrentSentence = createAction('setFutureToCurrentSentence');
export const incMistakes = createAction('incMistakes');
export const incCorrectAnswers = createAction('incCorrectAnswers');
export const checkMaxInARow = createAction<number>('checkMaxInARow');
export const resetStats = createAction('resetStats');

