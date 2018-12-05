import * as types from '../constants/ActionTypes';
const initialState = {
  isRefreshing: false,
  loading: false,
  isLoadMore: false,
  isEnd: false,
  coverList: [],
  coverDetailList: {},
};

export default function cover(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COVER_LIST:
      return Object.assign({}, state, { loading: action.loading });
    case types.RECEIVE_COVER_LIST:
      return Object.assign({}, state, {
        loading: false,
        coverList: action.coverList,
      });
    case types.FETCH_COVER_DETAIL:
      return {
        ...state,
        isRefreshing: action.isRefreshing,
        loading: action.loading,
        isLoadMore: action.isLoadMore,
      };
    case types.RECEIVE_COVER_DETAIL:
      let ll = {};
      if (action.coverDetailList.length > 0) {
        if (action.curPage == 1) {
          ll[action.coverDetailList[0].chapterId] = action.coverDetailList;
          datas = { ...state.coverDetailList, ...ll };
        } else {
          ll[action.coverDetailList[0].chapterId] = [
            ...state.coverDetailList[action.coverDetailList[0].chapterId],
            ...action.coverDetailList,
          ];
          datas = { ...state.coverDetailList, ...ll };
        }
      }

      return Object.assign({}, state, {
        isRefreshing: false,
        isLoadMore: false,
        isEnd: action.isEnd,
        loading: false,
        coverDetailList: datas,
      });

    default:
      return state;
  }
}
