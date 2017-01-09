const SET_AUTH_TOKEN = 'global/SET_AUTH_TOKEN';

export default (state = {token: ''}, action) => {
  if (action.type === SET_AUTH_TOKEN) {
    return {...state, token: action.token};
  }
  return state;
};

const setAuthToken = token => {
  return {
    type: SET_AUTH_TOKEN,
    token
  }
};

export const saveAuthToken = token => dispatch => {
  dispatch(setAuthToken(token));
  localStorage.setItem('authToken', token);
};
