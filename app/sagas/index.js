import { all, fork } from 'redux-saga/effects';
import { watchRequestHomeList } from './home';
import { watchRequestCoverList } from './cover';
export default function* rootSaga() {
  yield all([fork(watchRequestHomeList), fork(watchRequestCoverList)]);
}
