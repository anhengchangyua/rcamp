import { take, put, fork, call } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { fetchCoverList, receiveCoverList } from '../actions/cover';
import RequestUtil from '../utils/RequestUtils';
import ToastUtil from '../utils/ToastUtil';
import { COVER_LIST } from '../constants/Urls';

export function* requestCoverList(loading) {
  try {
    yield put(fetchCoverList(loading)); //start request tip

    const coverLists = yield call(RequestUtil.request, `${COVER_LIST}`, 'get');
    yield put(receiveCoverList(coverLists.data));
    const errorMsg = coverLists.errorMsg;

    if (errorMsg && errorMsg !== '') {
      yield ToastUtil.showShort(errorMsg);
    }
  } catch (error) {
    yield put(receiveCoverList([]));
    ToastUtil.showShort('网络发生错误，请重试');
  }
}

export function* watchRequestCoverList() {
  while (true) {
    const loadStatus = yield take(types.REQUEST_COVER_LIST);
    yield fork(requestCoverList, loadStatus);
  }
}
