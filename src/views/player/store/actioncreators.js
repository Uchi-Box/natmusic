import * as actionTypes from './constants'
import { getSongDetailReq } from '../../../api/requests'
import { log } from '@craco/craco/lib/logger'

export const changeCurrentSong = data => ({
  data,
  type: actionTypes.SET_CURRENT_SONG
})

export const changeFullScreen = data => ({
  data,
  type: actionTypes.SET_FULL_SCREEN
})

export const changeShowMini = data => ({
  data,
  type: actionTypes.SET_SHOW_MINI
})

export const changeCurrentIndex = data => ({
  data,
  type: actionTypes.SET_CURRENT_INDEX
})

export const changePlayingState = data => ({
  data,
  type: actionTypes.SET_PLAYING
})

export const changeShowPlayList = data => ({
  data,
  type: actionTypes.SET_SHOW_PLAYLIST
})

export const changePlayList = data => ({
  data,
  type: actionTypes.SET_PLAYLIST
})

export const changeSequencePlayList = data => ({
  type: actionTypes.SET_SEQUENCE_PLAYLIST,
  data
})

export const changePlayMode = data => ({
  type: actionTypes.SET_PLAY_MODE,
  data
})

export const deleteSong = data => ({
  type: actionTypes.DELETE_SONG,
  data
})

export const getCurrentSong = id => {
  return dispatch => {
    getSongDetailReq(id)
      .then(data => {
        console.log(data)
        dispatch(changeCurrentSong(data.songs[0]))
      })
      .catch(err => {
        console.log('获取歌曲详情错误', err)
      })
  }
}
