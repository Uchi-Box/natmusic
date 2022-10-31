import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { getAlbumDetail } from './store'
import { getCount, getName, isEmptyObject } from '../../api/utils'
import {
  ArrowLeft,
  CheckCorrect,
  Comment,
  Download,
  Play,
  PlayOne,
  Right,
  Share,
  ShareOne
} from '@icon-park/react'
import {
  changeCurrentIndex,
  changeCurrentSong,
  changePlayingState,
  changePlayList,
  changeSequencePlayList,
  changeShowMini
} from '../player/store/actioncreators'
import { getAlbumDetailReq, getSongDetailReq } from '../../api/requests'

const Album = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()

  const [fullList, setFullList] = useState([])

  useEffect(() => {
    dispatch(getAlbumDetail(id))
    getFUllPLayLIst(id)
  }, [])

  const { albumDetail } = useSelector(state => state.album)

  const getFUllPLayLIst = id => {
    getAlbumDetailReq(id).then(data => {
      const trackIds = data.playlist.trackIds.reduce((init, item) => {
        return init + ',' + item.id
      }, '1')
      getSongDetailReq(trackIds).then(data => {
        setFullList(data.songs)
      })
    })
  }

  const handleClick = (item, index) => {
    dispatch(changePlayList(fullList))
    dispatch(changeSequencePlayList(fullList))
    dispatch(changeCurrentIndex(index))
    dispatch(changeCurrentSong(item))
  }

  return isEmptyObject(albumDetail) ? null : (
    <div className="bg-black min-h-screen">
      <div className="z-20 fixed backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 h-12 w-full flex justify-between items-center px-2 py-2">
        <ArrowLeft
          onClick={() => history.goBack()}
          theme="outline"
          size="30"
          fill="#fff"
          strokeWidth={2}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
        <span className="text-white text-lg font-bold">歌单</span>
        <ShareOne theme="outline" size="30" fill="#fff" strokeWidth={2} />
      </div>
      <div
        style={{ backgroundImage: `url(${albumDetail.coverImgUrl})` }}
        className="h-96 w-full bg-cover"
      >
        <div
          className="h-96 w-full pt-16
                flex flex-col space-y-4
                 backdrop-filter backdrop-blur-lg bg-black bg-opacity-50
                 "
        >
          <div className="h-36 w-full flex space-x-6 px-6">
            <div
              style={{ backgroundImage: `url(${albumDetail.coverImgUrl})` }}
              className="relative h-36 w-36 bg-cover rounded-lg shadow-lg"
            >
              <div className="absolute right-2 flex items-center">
                <PlayOne
                  theme="outline"
                  size="20"
                  fill="#fff"
                  strokeWidth={3}
                />
                <span className="text-white text-micro">
                  {getCount(albumDetail.playCount)}
                </span>
              </div>
            </div>
            <div className="flex flex-col h-36 w-36">
              <p className="text-white text-md font-bold">{albumDetail.name}</p>
              <div className="h-10 flex items-center space-x-2">
                <img
                  className="w-10 h-10 rounded-full"
                  src={albumDetail.creator.avatarUrl}
                  alt="avatar"
                />
                <span className="text-sm text-gray-300 truncate flex-1">
                  {albumDetail.creator.nickname}
                </span>
                <Right
                  theme="outline"
                  size="18"
                  fill="#D1D5DB"
                  strokeWidth={3}
                  strokeLinecap="square"
                />
              </div>
              <p className="text-gray-300 text-sm overflow-y-scroll scrollbar-hide">
                {albumDetail.description ? albumDetail.description : '暂无简介'}
              </p>
            </div>
          </div>
          <div className="h-10 flex justify-around px-6">
            <div className="h-10 w-10">
              <Comment
                theme="outline"
                size="30"
                fill="#fff"
                strokeWidth={3}
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
              <span className="text-white text-sm">评论</span>
            </div>
            <div className="h-10 w-10">
              <Share
                theme="outline"
                size="30"
                fill="#fff"
                strokeWidth={3}
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
              <span className="text-white text-sm">分享</span>
            </div>
            <div className="h-10 w-10">
              <Download
                theme="outline"
                size="30"
                fill="#fff"
                strokeWidth={3}
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
              <span className="text-white text-sm">下载</span>
            </div>
            <div className="h-10 w-10">
              <CheckCorrect
                theme="outline"
                size="30"
                fill="#fff"
                strokeWidth={3}
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
              <span className="text-white text-sm">多选</span>
            </div>
          </div>
        </div>
        <div className="absolute top-76 flex flex-col space-y-2 w-full bg-black rounded-t-3xl px-4">
          <div className="h-12 flex justify-between pt-2">
            <div className="flex items-center space-x-1">
              <Play
                theme="outline"
                size="24"
                fill="#fff"
                strokeWidth={3}
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
              <p className="text-white text-lg font-bold">
                播放全部{' '}
                <span className="text-sm font-normal text-gray-500">
                  (共{albumDetail.trackCount}首)
                </span>
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <ul className="flex flex-row-reverse space-x-reverse -space-x-4">
                {albumDetail.subscribers.slice(0, 3).map((item, index) => {
                  return (
                    <li key={index}>
                      <img
                        src={item.avatarUrl + '?param=200y200'}
                        className="w-8 h-8 rounded-full"
                        alt="album"
                      />
                    </li>
                  )
                })}
              </ul>
              <p className="text-white">{albumDetail.subscribedCount}人收藏</p>
            </div>
          </div>
          <ol className="space-y-3">
            {fullList.map((item, index) => {
              return (
                <li
                  key={index}
                  className="w-full h-14"
                  onClick={() => handleClick(item, index)}
                >
                  <div className="flex justify-between items-center space-x-4">
                    <span className="text-gray-600 text-xl">{index + 1}</span>
                    <div className="flex-1 w-20">
                      <div className="text-white truncate leading-none text-lg font-bold">
                        {item.name}
                      </div>
                      <p className="text-gray-400">{getName(item.ar)}</p>
                    </div>
                    <svg
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z"
                        fill="rgba(255,255,255,1)"
                      />
                    </svg>
                  </div>
                </li>
              )
            })}
            ) }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Album
