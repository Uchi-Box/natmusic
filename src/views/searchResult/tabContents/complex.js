import { getCount, getName } from '../../../api/utils'
import { MoreOne } from '@icon-park/react'
import { useHistory } from 'react-router-dom'

export const Complex = ({ complex, clickToPlay }) => {
  const history = useHistory()

  return (
    <div className="flex flex-col px-4">
      <div className="mt-4">
        <h2 className="text-white text-lg font-bold">单曲</h2>
        <ul className="space-y-2 mt-4">
          {complex.song.songs.map((item, index) => {
            return (
              <li
                onClick={() => clickToPlay(complex.song.songs, index)}
                className="flex justify-between items-center h-12 border-b border-gray-700"
                key={index}
              >
                <div className="truncate">
                  <p className="hover:text-red-600 text-white text-md">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-300 truncate">
                    {getName(item.ar)}-{item.al.name}
                  </p>
                </div>
                <MoreOne className="flex-shrink-0" size={28} fill="#fff" />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-white text-lg font-bold">歌单</h2>
        <ul className="space-y-2 mt-4">
          {complex.playList.playLists.map((item, index) => {
            return (
              <li
                onClick={() => history.push(`/album/${item.id}`)}
                key={index}
                className="h-12 flex items-center space-x-2"
              >
                <img
                  className="rounded-lg w-12 h-12"
                  src={`${item.coverImgUrl}?param=200y200`}
                />
                <div>
                  <h3 className="text-white truncate text-md font-bold">
                    {item.name}
                  </h3>
                  <p className="truncate text-sm text-gray-300">
                    {item.trackCount}首音乐 by {item.creator.nickname}，播放
                    {getCount(item.playCount)}次
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-white text-lg font-bold">歌手</h2>
        <ul className="space-y-2">
          {complex.artist.artists.map((item, index) => {
            return (
              <li className="h-12 flex items-center space-x-2" key={index}>
                <img className="w-12 h-12 rounded-full" src={item.picUrl} />
                <p className="text-white text-md font-bold">{item.name}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
