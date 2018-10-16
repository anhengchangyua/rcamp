import * as types from '../constants/ActionTypes'

export function fetchHomeList(isRefreshing, loading, isLoadMore) {
  return {
    type: types.FETCH_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore
  }
}
export function fetchCoverList(loading) {
  return {
    type: types.FETCH_COVER_LIST,
    loading
  }
}

export function requestHomeList(isRefreshing, loading, isLoadMore, page) {
  return {
    type: types.REQUEST_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore,
    page
  }
}

export function requestCoverList(loading) {
  return {
    type: types.REQUEST_COVER_LIST,
    loading
  }
}

export function receiveCoverList(homeList) {
  return { type: types.RECEIVE_COVER_LIST, homeList }
}

export function receiveHomeList(isEnd, curPage, homeList) {
  return { type: types.RECEIVE_HOME_LIST, isEnd, curPage, homeList }
}
