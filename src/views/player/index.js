import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState, useLayoutEffect } from 'react'
import {
  changeCurrentIndex,
  changeCurrentSong,
  changeFullScreen,
  changePlayingState,
  changePlayList,
  changePlayMode,
  changeShowMini,
  changeShowPlayList,
  deleteSong,
  getCurrentSong
} from './store/actioncreators'
import { findIndex, getSongUrl, shuffle } from '../../api/utils'
import NormalPlayer from '../normalPlayer'
import MiniPlayer from '../../components/mini-player'
import PlayList from '../../components/playList'

const Player = () => {
  const dispatch = useDispatch()
  const {
    fullScreen,
    currentSong,
    playing,
    playList,
    showPlayList,
    currentIndex,
    showMini,
    sequencePlayList,
    playMode
  } = useSelector(state => state.player)

  const [preSong, setPreSong] = useState({})

  const audioRef = useRef()

  useLayoutEffect(() => {
    if (
      !playList.length ||
      currentIndex === -1 ||
      !playList[currentIndex] ||
      playList[currentIndex].id === preSong.id
    )
      return
    let current = playList[currentIndex]
    dispatch(getCurrentSong(current.id))
    audioRef.current.src = getSongUrl(current.id)
    audioRef.current.play()
    dispatch(changePlayingState(true))
    dispatch(changeShowMini(true))
  }, [playList, currentIndex])

  useEffect(() => {
    setPreSong(currentSong)
    setCurrentTime(0)
    setDuration(currentSong.dt / 1000)
  }, [currentSong])

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause()
  }, [playing])

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [changingPercent, setChangingPercent] = useState(false)

  const updateTime = e => {
    if (!changingPercent) setCurrentTime(e.target.currentTime)
  }

  let percent = currentTime / duration

  const movingProgress = () => {
    setChangingPercent(true)
  }

  const endChangeProgress = newPercent => {
    const newTime = newPercent * duration
    setCurrentTime(newTime)
    audioRef.current.currentTime = newTime
    if (!playing) {
      dispatch(changePlayingState(true))
    }
    setChangingPercent(false)
  }

  const handleError = () => {
    handleNext()
    alert('播放出错')
  }

  const handleLoop = () => {
    audioRef.current.currentTime = 0
    dispatch(changePlayingState(true))
    audioRef.current.play()
  }

  const handlePlay = e => {
    e.stopPropagation()
    dispatch(changePlayingState(!playing))
  }

  const handleNext = () => {
    if (playList.length === 1 || playMode === 1) {
      handleLoop()
      return
    }
    let index = currentIndex + 1
    if (index === playList.length) index = 0
    dispatch(changeCurrentIndex(index))
  }

  const handlePrev = () => {
    if (playList.length === 1 || playMode === 1) {
      handleLoop()
      return
    }
    let index = currentIndex - 1
    if (index < 0) index = playList.length - 1
    dispatch(changeCurrentIndex(index))
  }

  const handleShowPlayList = () => {
    dispatch(changeShowPlayList(!showPlayList))
  }

  const clickToPlay = index => {
    if (index === currentIndex) return
    dispatch(changePlayingState(false))
    dispatch(changeCurrentIndex(index))
  }

  const exitFullScreen = () => {
    dispatch(changeFullScreen(false))
    dispatch(changeShowMini(true))
  }

  const clickToDel = (e, song) => {
    e.stopPropagation()
    dispatch(deleteSong(song))
  }

  const clearPlayList = () => {
    dispatch(changePlayList([]))
    dispatch(changeCurrentSong({}))
    dispatch(changePlayingState(false))
  }

  const changeMode = () => {
    let newMode = (playMode + 1) % 3
    if (newMode === 0) {
      dispatch(changePlayList(sequencePlayList))
      let index = findIndex(currentSong, sequencePlayList)
      dispatch(changeCurrentIndex(index))
    } else if (newMode === 1) {
      dispatch(changePlayList(sequencePlayList))
    } else if (newMode === 2) {
      let newList = shuffle(sequencePlayList)
      let index = findIndex(currentSong, newList)
      dispatch(changePlayList(newList))
      changeCurrentIndex(index)
    }
    dispatch(changePlayMode(newMode))
  }

  return (
    <div>
      {fullScreen ? (
        <NormalPlayer
          percent={percent}
          currentSong={currentSong}
          currentTime={currentTime}
          duration={duration}
          handlePlay={handlePlay}
          handleLoop={handleLoop}
          handleNext={handleNext}
          handlePrev={handlePrev}
          playing={playing}
          exitFullScreen={exitFullScreen}
          endChangeProgress={endChangeProgress}
          movingProgress={movingProgress}
          mode={playMode}
          changeMode={changeMode}
          handleShowPlayList={handleShowPlayList}
        />
      ) : null}
      {showMini ? (
        <MiniPlayer
          currentSong={currentSong}
          handlePlay={handlePlay}
          playing={playing}
          handleShowPlayList={handleShowPlayList}
        />
      ) : null}
      {showPlayList ? (
        <PlayList
          playList={playList}
          handleShowPlayList={handleShowPlayList}
          clearPlayList={clearPlayList}
          clickToPlay={clickToPlay}
          clickToDel={clickToDel}
          clearPlayList={clearPlayList}
          currentIndex={currentIndex}
        />
      ) : null}
      <audio
        ref={audioRef}
        onTimeUpdate={updateTime}
        onEnded={handleNext}
        onError={handleError}
      />
    </div>
  )
}

export default Player
