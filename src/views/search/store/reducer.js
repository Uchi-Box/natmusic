import * as actionTypes from './constants'

const defaultState = {
  hotList: [],
  suggestList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOT_KEYWORDS:
      return { ...state, hotList: action.data }
    case actionTypes.SET_SUGGEST_LIST:
      return { ...state, suggestList: action.data }
    default:
      return state
  }
}
