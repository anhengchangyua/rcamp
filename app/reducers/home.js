import * as types from '../constants/ActionTypes'
const initialState = {
  isRefreshing: false,
  loading: false,
  isLoadMore: false,
  noMore: false,
  homeList: []
}
export default function home(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_HOME_LIST:
      return Object.assign({}, state, {
        isRefreshing: action.isRefreshing,
        loading: action.loading,
        isLoadMore: action.isLoadMore
      })

    case types.RECEIVE_HOME_LIST:
      if (action.curPage == 1) {
        datas = action.homeList
      } else {
        datas = [...datas, ...action.homeList]
      }

      return Object.assign({}, state, {
        isRefreshing: false,
        loading: false,
        isLoadMore: false,
        noMore: action.homeList.length === 0,
        homeList: datas,
        isEnd: action.isEnd
      })

    default:
      return state
  }
}
