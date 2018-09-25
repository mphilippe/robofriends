import { SET_SEARCH } from '../constants';

const initialState = {
  search: ''
}

export const search = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.text
      };

    default:
      return state;
  }
};
