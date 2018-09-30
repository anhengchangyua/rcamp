import * as types from '../constants/ActionTypes';
import { Alert } from 'react-native';
import { fetchHomeList, receiveHomeList } from '../actions/home';
import RequestUtil from '../utils/RequestUtils';
import { HOME_LIST } from '../constants/Urls';
export function* requestHomeList(
  isRefreshing,
  loading,
  typeId,
  isLoadMore,
  page
) {
  try {
    yield put(fetchHomeList(isRefreshing, loading, isLoadMore)); //  start request tip
    const homeLists = yield call(RequestUtil.request, `${HOME_LIST}`, 'get');
    Alert.alert(homeLists);
    // yield put(receiveHomeList(null, typeId));
    // const errorMessage = articleList.showapi_res_error;
    // if (errorMessage && errorMessage !== '') {
    //   yield ToastUtil.showShort(errorMessage);
    // }
  } catch (error) {
    // yield put(receiveArticleList([], typeId));
    // ToastUtil.showShort('网络发生错误，请重试');
  }
}

export function* watchRequestHomeList() {
  while (true) {
    const { isRefreshing, loading, typeId, isLoadMore, page } = yield take(
      types.REQUEST_HOME_LIST
    );
    yield fork(
      requestHomeList,
      isRefreshing,
      loading,
      typeId,
      isLoadMore,
      page
    );
  }
}
