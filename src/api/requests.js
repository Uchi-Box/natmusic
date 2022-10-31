import { axiosInstance } from './config'

export const getBannerReq = () => {
  return axiosInstance.get('/banner?type=2')
}

export const getRecommendReq = () => {
  return axiosInstance.get('/personalized')
}

export const getAlbumDetailReq = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`)
}

export const getSongDetailReq = id => {
  return axiosInstance.get(`/song/detail?ids=${id}`)
}

export const getNewSongReq = () => {
  return axiosInstance.get('top/song?type=0')
}

export const getHotKeyWordsReq = () => {
  return axiosInstance.get('/search/hot')
}

export const getSuggestListReq = query => {
  return axiosInstance.get(`/search/suggest?keywords=${query}&type=mobile`)
}

export const getResultReq = (query, type) => {
  return axiosInstance.get(`/search?keywords=${query}&type=${type}`)
}

export const getMVReq = () => {
  return axiosInstance.get('/mv/first')
}
