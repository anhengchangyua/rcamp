import * as types from '../constants/ActionTypes'
import { fetchHomeList, receiveHomeList } from '../actions/home'
import RequestUtil from '../utils/RequestUtils'
import { HOME_LIST } from '../constants/Urls'
export function* requestHomeList(
  isRefreshing,
  loading,
  typeId,
  isLoadMore,
  page
) {
  try {
    console.log('requestHomeList')
    // yield put(fetchHomeList(isRefreshing, loading, isLoadMore)) //  start request tip
    // const homeLists = yield call(RequestUtil.request, `${HOME_LIST}`, 'get')
    // yield put(receiveHomeList({ aaa: 11, abbb: 2 }, 1))
    // const errorMessage = articleList.showapi_res_error;
    // if (errorMessage && errorMessage !== '') {
    //   yield ToastUtil.showShort(errorMessage);
    // }
  } catch (error) {
    // yield put(receiveArticleList([], typeId));
    ToastUtil.showShort('网络发生错误，请重试')
  }
}

export function* watchRequestHomeList() {
  while (true) {
    console.log('watchRequestHomeList')
    const { isRefreshing, loading, typeId, isLoadMore, page } = yield take(
      types.REQUEST_HOME_LIST
    )
    console.log(page)

    yield fork(requestHomeList, isRefreshing, loading, typeId, isLoadMore, page)
  }
}
