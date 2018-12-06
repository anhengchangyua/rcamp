import { put, takeEvery, call } from 'redux-saga/effects'
import * as types from '../constants/ActionTypes'
import RequestUtil from '../utils/RequestUtils'
import ToastUtil from '../utils/ToastUtil'
import { LOGIN } from '../constants/Urls'
import { fetchLogin, receiveLogin } from '../actions/app'

export function* requestLogin(action) {
  try {
    const { loading, params } = action
    yield put(fetchLogin(loading)) //start request tip
    console.log('22222')
    const datas = yield call(RequestUtil.request, `${LOGIN}`, 'post')
    console.log(datas)
    yield put(receiveLogin(datas.data))

    const errorMsg = coverLists.errorMsg

    if (errorMsg && errorMsg !== '') {
      yield ToastUtil.showShort(errorMsg)
    }
  } catch (error) {
    yield put(receiveLogin([]))
    ToastUtil.showShort('网络发生错误，请重试')
  }
}

export function* watchRequestApp() {
  while (true) {
    yield takeEvery(types.REQUEST_LOGIN, requestLogin)
  }
}
