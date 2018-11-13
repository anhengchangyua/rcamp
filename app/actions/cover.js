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

//DETAIL 

export function fetchCoverDetail(loading) {
  return {
    type: types.FETCH_COVER_DETAIL,
    loading
  };
}

export function receiveCoverDetailList(coverDetailList) {
  return { type: types.RECEIVE_COVER_DETAIL, coverDetailList };
}



export function requestCoverDetail(loading,cid){
  return {
    type: types.REQUEST_COVER_DETAIL,
    loading,
    cid
  };
}