import * as types from '../constants/ActionTypes';
const initialState = {
  isRefreshing: false,
  loading: false,
  isLoadMore: false,
  noMore: false,
  articleList: {}
};
export default function home(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_HOME_LIST:

    case types.RECEIVE_ARTICLE_LIST:

    default:
      return state;
  }
}
