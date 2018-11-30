import * as types from '../constants/ActionTypes';
const initialState = {
  loading: false,
  coverList: [],
  coverDetailList: [],
};

export default function cover(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COVER_LIST:
      return Object.assign({}, state, { loading: action.loading });
    case types.RECEIVE_COVER_LIST:
      return Object.assign({}, state, {
        loading: false,
        coverList: action.coverList,
      });
    case types.FETCH_COVER_DETAIL:
      return Object.assign({}, state, {
        loading: false,
      });
    case types.RECEIVE_COVER_DETAIL:
      console.log('aaa', action.coverDetailList.length);

      return Object.assign({}, state, {
        loading: false,
        coverDetailList: action.coverDetailList,
      });

    default:
      return state;
  }
}
