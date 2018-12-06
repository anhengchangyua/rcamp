import * as types from '../constants/ActionTypes'

const initialState = {
  loading: false,
  data: null
}

export default function cover(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_LOGIN:
      return Object.assign({}, state, { loading: action.loading })
    case types.RECEIVE_LOGIN:
      return Object.assign({}, state, {
        loading: false,
        data: action.data
      })
    default:
      return state
  }
}
