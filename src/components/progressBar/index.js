import { useEffect, useRef, useState } from 'react'
import { formatTime } from '../../api/utils'

const ProgressBar = props => {
  const { currentTime, percent, duration, endChangeProgress, movingProgress } =
    props

  useEffect(() => {
    const barWidth = progressBar.current.clientWidth
    const offsetWidth = percent * barWidth
    progress.current.style.width = `${offsetWidth}px`
    progressBtn.current.style.transform = `translate3d(${offsetWidth}px,0,0)`
  })

  const progressBar = useRef()
  const progress = useRef()
  const progressBtn = useRef()
  const [touch, setTouch] = useState({})
  const progressBtnWidth = 8

  const _offset = offsetWidth => {
    progress.current.style.width = `${offsetWidth}px`
    progressBtn.current.style.transform = `translate3d(${offsetWidth}px,0,0)`
  }

  const _changePercent = () => {
    const barWidth = progressBar.current.clientWidth - progressBtnWidth
    const newPercent = progress.current.clientWidth / barWidth
    endChangeProgress(newPercent)
  }

  const touchStart = e => {
    const startTouch = {}
    startTouch.initiated = true //initial为true表示滑动动作开始
    startTouch.startX = e.touches[0].pageX //滑动开始时横向坐标
    startTouch.left = progress.current.clientWidth //当前progress长度
    setTouch(startTouch)
  }

  const touchMove = e => {
    if (!touch.initiated) return
    //滑动距离
    const deltaX = e.touches[0].pageX - touch.startX
    const barWidth = progressBar.current.clientWidth - progressBtnWidth
    const offsetWidth = Math.min(Math.max(0, touch.left + deltaX), barWidth)
    _offset(offsetWidth)
    movingProgress()
  }

  const touchEnd = e => {
    const endTouch = JSON.parse(JSON.stringify(touch))
    endTouch.initiated = false
    setTouch(endTouch)
    _changePercent()
  }

  const progressClick = e => {
    const rect = progressBar.current.getBoundingClientRect()
    const offsetWidth = e.pageX - rect.left
    _offset(offsetWidth)
    _changePercent(percent)
  }

  return (
    <div className="progressBarWrapper flex justify-between items-center space-x-4">
      <div className="text-white text-sm">
        {currentTime ? formatTime(currentTime * 1000) : '00:00'}
      </div>
      <div
        ref={progressBar}
        onClick={progressClick}
        className="progressBar w-full h-1 bg-gray-400 relative rounded-full"
      >
        <div
          className="progress h-1 absolute bg-red-600 rounded-full"
          ref={progress}
        />
        <div
          className="btnWrapper left-0 -top-1.5 absolute w-4 h-4 bg-white border-2 border-red-600 rounded-full"
          ref={progressBtn}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
          onTouchEnd={touchEnd}
        />
      </div>
      <div className="text-sm text-white">{formatTime(duration * 1000)}</div>
    </div>
  )
}

export default ProgressBar
