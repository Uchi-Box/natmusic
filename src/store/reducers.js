import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../views/recommend/store/index'
import { reducer as albumReducer } from '../views/album/store/index'
import { reducer as playerReducer } from '../views/player/store/index'
import { reducer as searchReducer } from '../views/search/store/index'
import { reducer as resultReducer } from '../views/searchResult/store/index'

export default combineReducers({
  recommend: recommendReducer,
  album: albumReducer,
  player: playerReducer,
  search: searchReducer,
  result: resultReducer
})
