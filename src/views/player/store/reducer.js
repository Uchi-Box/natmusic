import * as actionTypes from './constants'
import { playMode } from '../../../api/config'
import { findIndex } from '../../../api/utils'
import { getSongDetailReq } from '../../../api/requests'

const defaultState = {
  fullScreen: false,
  playing: false,
  playList: [],
  sequencePlayList: [],
  playMode: playMode.sequence,
  currentSong: {},
  showPlayList: false,
  currentIndex: -1,
  showMini: false
}

const handleDeleteSong = (state, song) => {
  const playList = JSON.parse(JSON.stringify(state.playList))
  const sequenceList = JSON.parse(JSON.stringify(state.sequencePlayList))
  let currentIndex = state.currentIndex

  const flIndex = findIndex(song, playList)
  playList.splice(flIndex, 1)
  if (flIndex < currentIndex) currentIndex--

  const fsIndex = findIndex(song, sequenceList)
  sequenceList.splice(fsIndex, 1)

  return { ...state, playList, sequenceList, currentIndex }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_FULL_SCREEN:
      return { ...state, fullScreen: action.data }
    case actionTypes.SET_CURRENT_INDEX:
      return { ...state, currentIndex: action.data }
    case actionTypes.SET_CURRENT_SONG:
      return { ...state, currentSong: action.data }
    case actionTypes.SET_PLAYLIST:
      return { ...state, playList: action.data }
    case actionTypes.SET_SHOW_PLAYLIST:
      return { ...state, showPlayList: action.data }
    case actionTypes.SET_SEQUENCE_PLAYLIST:
      return { ...state, sequencePlayList: action.data }
    case actionTypes.SET_PLAY_MODE:
      return { ...state, playMode: action.data }
    case actionTypes.SET_PLAYING:
      return { ...state, playing: action.data }
    case actionTypes.SET_SHOW_MINI:
      return { ...state, showMini: action.data }
    case actionTypes.DELETE_SONG:
      return handleDeleteSong(state, action.data)
    default:
      return state
  }
}
