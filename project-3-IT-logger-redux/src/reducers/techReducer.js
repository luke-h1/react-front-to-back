import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from '../actions/types';

const initialState = {
  techs: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
  }
};
