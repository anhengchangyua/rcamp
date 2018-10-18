import * as types from '../constants/ActionTypes';

export function fetchHomeList(isRefreshing, loading, isLoadMore) {
  return {
    type: types.FETCH_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore
  };
}

export function requestHomeList(isRefreshing, loading, isLoadMore, page) {
  return {
    type: types.REQUEST_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore,
    page
  };
}

export function receiveHomeList(isEnd, curPage, homeList) {
  return { type: types.RECEIVE_HOME_LIST, isEnd, curPage, homeList };
}

//Banner actions

export function fetchBannerList(loading) {
  return {
    type: types.FETCH_BANNER_LIST,
    loading
  };
}

export function requestBannerList(loading) {
  return { type: types.REQUEST_BANNER_LIST, loading };
}

export function receiveBannerList(bannerList) {
  return { type: types.RECEIVE_BANNER_LIST, bannerList };
}
