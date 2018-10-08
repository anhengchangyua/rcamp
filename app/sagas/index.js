import { all, fork } from 'redux-saga/effects'
import { watchRequestHomeList } from './home'

export default function* rootSaga() {
  yield all([fork(watchRequestHomeList)])
}
