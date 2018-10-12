import * as types from '../constants/ActionTypes'

export function fetchHomeList(isRefreshing, loading, isLoadMore) {
  return {
    type: types.FETCH_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore
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

export function receiveHomeList(isEnd, curPage, homeList) {
  return { type: types.RECEIVE_HOME_LIST, isEnd, curPage, homeList }
}
