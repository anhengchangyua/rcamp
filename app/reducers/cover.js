import * as types from '../constants/ActionTypes';
const initialState = {
  loading: false,
  coverList: []
};

export default function cover(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COVER_LIST:
      return Object.assign({}, state, { loading: action.loading });
    case types.RECEIVE_COVER_LIST:
      return Object.assign({}, state, {
        loading: false,
        coverList: action.coverList
      });

    default:
      return state;
  }
}
