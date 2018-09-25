import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants';

export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((robots) => {
      return Array.isArray(robots) ? 
        dispatch({
          type: REQUEST_ROBOTS_SUCCESS,
          robots
        }) : dispatch({
          type: REQUEST_ROBOTS_FAILED,
          error: 'Wrong format'
        });
    })
    .catch((error) => dispatch({
      type: REQUEST_ROBOTS_FAILED,
      error
    }));
};
