import { take, put, fork, call } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { fetchCoverList, receiveCoverList, fetchCoverDetail, receiveCoverDetailList} from '../actions/cover';
import RequestUtil from '../utils/RequestUtils';
import ToastUtil from '../utils/ToastUtil';
import { COVER_LIST, COVER_DETAIL } from '../constants/Urls';

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

export function* requestCoverDetail(loading,cid=60){
  try {

    yield put(fetchCoverDetail(loading)); //start request tip
    console.log("ccc", `${ COVER_DETAIL } /? cid = ${ cid }`)
    const coverDetail = yield call(RequestUtil.request, `${COVER_DETAIL}/?cid=${cid}`, 'get');
    yield put(receiveCoverDetailList(coverDetail.data.datas));
    console.log("dddd", coverDetail)
    const errorMsg = coverDetail.errorMsg;

    if (errorMsg && errorMsg !== '') {
      yield ToastUtil.showShort(errorMsg);
    }
   } catch (error){
    yield put(receiveCoverDetailList([]));
    ToastUtil.showShort('网络发生错误，请重试');
  }
}

export function* watchRequestCoverList() {
  while (true) {
    const {loadStatus ,cid}= yield take(types.REQUEST_COVER_LIST,types.REQUEST_COVER_DETAIL);
    yield fork(requestCoverList, loadStatus);
    yield fork(requestCoverDetail, loadStatus, cid);
  }
}
