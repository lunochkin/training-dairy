import axios from 'axios';
import { normalize, schema } from 'normalizr';


const record = new schema.Entity('records', {}, {idAttribute: '_id'});
const exercise = new schema.Entity('exercises', {}, {idAttribute: '_id'});


const SET_EXERCISES = 'diary/SET_EXERCISES';
const SET_RECORDS = 'diary/SET_RECORDS';

const initialState = {
  exercises: {
    entities: {},
    result: [],
  },
  records: {
    entities: {},
    result: []
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXERCISES:
      return {...state, exercises: action.exercises};
    case SET_RECORDS:
      return {...state, records: action.records};
    default:
      return state;
  }
};


const setExercises = exercises => ({
  type: SET_EXERCISES,
  exercises
});

export const loadExercises = cb => dispatch => {
  axios.get('/api/exercises').then(response => {
    dispatch(
      setExercises(
        normalize(response.data, [exercise])
      )
    );

    if (cb) {
      cb();
    }
  });
};

const setRecords = records => ({
  type: SET_RECORDS,
  records
});

export const loadRecords = cb => dispatch => {
  axios.get(`/api/records`).then(response => {
    dispatch(
      setRecords(
        normalize(response.data, [record])
      )
    );

    if (cb) {
      cb();
    }
  });
};
