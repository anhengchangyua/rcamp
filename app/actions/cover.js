import * as types from '../constants/ActionTypes';

export function fetchCoverList(loading) {
  return {
    type: types.FETCH_COVER_LIST,
    loading
  };
}

export function requestCoverList(loading) {
  return {
    type: types.REQUEST_COVER_LIST,
    loading
  };
}

export function receiveCoverList(coverList) {
  return { type: types.RECEIVE_COVER_LIST, coverList };
}
