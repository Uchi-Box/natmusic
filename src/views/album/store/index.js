import { getAlbumDetailReq } from '../../../api/requests'

const CHANGE_ALBUM = '/album/CHANGE_ALBUM'

export const reducer = (state = { albumDetail: {} }, action) => {
  switch (action.type) {
    case CHANGE_ALBUM:
      return { albumDetail: action.data }
    default:
      return state
  }
}

const changeAlbum = data => ({
  data,
  type: CHANGE_ALBUM
})

export const getAlbumDetail = id => {
  return dispatch => {
    getAlbumDetailReq(id)
      .then(data => {
        dispatch(changeAlbum(data.playlist))
      })
      .catch(err => {
        console.log('获取歌单详情错误', err)
      })
  }
}
