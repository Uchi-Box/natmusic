import { CalendarThirty, Fm, Performance, Ranking } from '@icon-park/react'

const Iconset = () => {
  return (
    <div className="flex w-full h-16 justify-around">
      <div className="text-center">
        <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full">
          <CalendarThirty
            theme="filled"
            size="32"
            fill="#FF4500"
            strokeWidth={4}
          />
        </div>
        <span className="text-gray-400 text-sm">每日推荐</span>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full">
          <Fm theme="filled" size="32" fill="#FF4500" strokeWidth={4} />
        </div>
        <span className="text-gray-400 text-sm">私人FM</span>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full">
          <Performance
            theme="filled"
            size="32"
            fill="#FF4500"
            strokeWidth={4}
          />
        </div>
        <span className="text-gray-400 text-sm">歌单</span>
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full">
          <Ranking theme="filled" size="32" fill="#FF4500" strokeWidth={4} />
        </div>
        <span className="text-gray-400 text-sm">排行榜</span>
      </div>
    </div>
  )
}

export default Iconset
