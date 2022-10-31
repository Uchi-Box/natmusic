import * as actionTypes from './constants'
import {
  getHotKeyWordsReq,
  getResultSongListReq,
  getSuggestListReq
} from '../../../api/requests'

const changeHotKeyWords = data => ({
  type: actionTypes.SET_HOT_KEYWORDS,
  data
})

const changeSuggestList = data => ({
  type: actionTypes.SET_SUGGEST_LIST,
  data
})

export const getHotKeyWords = () => {
  return dispatch => {
    getHotKeyWordsReq()
      .then(data => {
        dispatch(changeHotKeyWords(data.result.hots))
      })
      .catch(err => {
        console.log('获取热搜词错误', err)
      })
  }
}

export const getSuggestList = query => {
  return dispatch => {
    getSuggestListReq(query).then(data => {
      if (!data) return
      let res = data.result.allMatch || []
      dispatch(changeSuggestList(res))
    })
  }
}
