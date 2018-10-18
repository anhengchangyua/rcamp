import { take, put, fork, call } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import {
  fetchHomeList,
  receiveHomeList,
  fetchBannerList,
  receiveBannerList
} from '../actions/home';
import RequestUtil from '../utils/RequestUtils';
import ToastUtil from '../utils/ToastUtil';
import { HOME_LIST, BANNER_LIST } from '../constants/Urls';
export function* requestHomeList(isRefreshing, loading, isLoadMore, page) {
  try {
    yield put(fetchHomeList(isRefreshing, loading, isLoadMore)); //  start request tip

    const homeLists = yield call(
      RequestUtil.request,
      `${HOME_LIST}/${page}/json`,
      'get'
    );
    let isEnd = homeLists.data.curPage > homeLists.data.pageCount;
    yield put(
      receiveHomeList(isEnd, homeLists.data.curPage, homeLists.data.datas)
    );
    const errorMsg = homeLists.errorMsg;

    if (errorMsg && errorMsg !== '') {
      yield ToastUtil.showShort(errorMsg);
    }
  } catch (error) {
    yield put(receiveHomeList(false, null, []));
    ToastUtil.showShort('网络发生错误，请重试');
  }
}

//Banner saga
export function* requestBannerList(loading) {
  try {
    yield put(fetchBannerList(loading)); //  start request tip
    console.log('vvvvv');
    const bannerLists = yield call(
      RequestUtil.request,
      `${BANNER_LIST}`,
      'get'
    );

    yield put(receiveBannerList(bannerLists.data));
    const errorMsg = bannerLists.errorMsg;
    if (errorMsg && errorMsg !== '') {
      yield ToastUtil.showShort(errorMsg);
    }
  } catch (error) {
    yield put(receiveBannerList([]));
    ToastUtil.showShort('网络发生错误，请重试');
  }
}

export function* watchRequestHomeList() {
  while (true) {
    const { isRefreshing, loading, isLoadMore, page } = yield take(
      types.REQUEST_HOME_LIST
    );
    yield fork(requestHomeList, isRefreshing, loading, isLoadMore, page);
    yield take(types.REQUEST_BANNER_LIST);
    yield fork(requestBannerList, true);
  }
}
