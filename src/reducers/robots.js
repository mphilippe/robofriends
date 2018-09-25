import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants';

const initialState = {
  robots: [],
  isPending: false,
  error: ''
}

export const robots = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return {
        ...state,
        isPending: true
      };

    case REQUEST_ROBOTS_SUCCESS:
      return {
        ...state,
        isPending: false,
        robots: action.robots
      };

    case REQUEST_ROBOTS_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.error
      };

    default:
      return state;
  }
};
