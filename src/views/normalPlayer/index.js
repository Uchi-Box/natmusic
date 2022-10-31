import {
  Down,
  GoEnd,
  GoStart,
  MusicList,
  PauseOne,
  Play,
  PlayCycle,
  PlayOnce,
  Share,
  ShuffleOne
} from '@icon-park/react'
import ProgressBar from '../../components/progressBar'
import { getName, isEmptyObject } from '../../api/utils'
import { playMode } from '../../api/config'

const NormalPlayer = props => {
  const {
    currentTime,
    handlePlay,
    percent,
    exitFullScreen,
    handleShowPlayList,
    movingProgress,
    endChangeProgress,
    handlePrev,
    handleNext,
    playing,
    currentSong,
    duration,
    mode,
    changeMode,
    changeProgress
  } = props

  const getPlayMode = () => {
    if (mode === playMode.sequence) {
      return (
        <PlayCycle
          theme="outline"
          size="40"
          fill="#fff"
          strokeWidth={2}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
      )
    } else if (mode === playMode.loop) {
      return (
        <PlayOnce
          theme="outline"
          size="40"
          fill="#fff"
          strokeWidth={2}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
      )
    } else {
      return (
        <ShuffleOne
          theme="outline"
          size="40"
          fill="#fff"
          strokeWidth={2}
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
      )
    }
  }

  return isEmptyObject(currentSong) ? null : (
    <div
      style={{ backgroundImage: `url(${currentSong.al.picUrl})` }}
      className="z-40 fixed inset-0 bg-cover h-full w-full bg-center"
    >
      <div className="w-full h-full flex flex-col justify-between p-4 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div className="h-12 flex justify-between items-center">
          <button onClick={exitFullScreen}>
            <Down size={30} fill="#fff" />
          </button>
          <div className="text-center">
            <h2 className="text-lg text-white font-bold">{currentSong.name}</h2>
            <p className="text-md text-gray-300">{getName(currentSong.ar)}</p>
          </div>
          <Share size={30} fill="#fff" />
        </div>
        <img
          className="w-76 h-76 rounded-full
                        justify-self-center mx-auto
                        border-40 border-black
                        animate-spin-slow
                        "
          src={currentSong.al.picUrl}
        />
        <div className="h-40 space-y-4">
          <ProgressBar
            percent={percent}
            currentTime={currentTime}
            duration={duration}
            changeProgress={changeProgress}
            movingProgress={movingProgress}
            endChangeProgress={endChangeProgress}
          />
          <div className="flex justify-around items-center">
            <button onClick={changeMode}>{getPlayMode()}</button>
            <button onClick={handlePrev}>
              <GoStart theme="outline" size="40" fill="#fff" strokeWidth={2} />
            </button>
            <button onClick={handlePlay}>
              {playing ? (
                <PauseOne
                  theme="outline"
                  size="50"
                  fill="#fff"
                  strokeWidth={2}
                />
              ) : (
                <Play theme="outline" size="50" fill="#fff" strokeWidth={2} />
              )}
            </button>
            <button onClick={handleNext}>
              <GoEnd theme="outline" size="40" fill="#fff" strokeWidth={2} />
            </button>
            <button onClick={handleShowPlayList}>
              <MusicList
                theme="outline"
                size="40"
                fill="#fff"
                strokeWidth={2}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NormalPlayer
