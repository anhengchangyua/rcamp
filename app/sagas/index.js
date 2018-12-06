import { all, fork } from 'redux-saga/effects'
import { watchRequestHomeList } from './home'
import { watchRequestCoverList } from './cover'
import { watchRequestApp } from './app'
export default function* rootSaga() {
  yield all([
    fork(watchRequestHomeList),
    fork(watchRequestCoverList),
    fork(watchRequestApp)
  ])
}
