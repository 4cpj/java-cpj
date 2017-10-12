export const LOGIN = 'LOGIN';

export const login = (text) => dispatch => {
  return dispatch({ type: LOGIN, text})
}
