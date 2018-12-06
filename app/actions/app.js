import * as types from '../constants/ActionTypes'

export function fetchLogin(loading) {
  return { type: types.FETCH_LOGIN, loading }
}

export function requestLogin(loading, params) {
  return { type: types.REQUEST_LOGIN, loading, params }
}

export function receiveLogin(data) {
  return { type: types.RECEIVE_LOGIN, data }
}
