const _get = require('lodash/get');

export const getAuthToken = state => _get(state, ['global', 'token']);

export const getOneExercise = (state, id) => _get(state, ['diary', 'exercises', 'entities', 'exercises', id]);
export const getExercises = state => _get(state, ['diary', 'exercises', 'result']).map(id => getOneExercise(state, id));

export const getOneRecord = (state, id) => {
  let one = _get(state, ['diary', 'records', 'entities', 'records', id]);
  return {...one, exercise: getOneExercise(state, one.exercise)};
};
export const getRecords = state => _get(state, ['diary', 'records', 'result']).map(id => getOneRecord(state, id));

export const getDraft = state => _get(state, ['diary', 'draft']);
export const isDairyAdding = state => getDraft(state).adding;
export const getRepsArray = state => _get(getDraft(state), ['data', 'reps']);
