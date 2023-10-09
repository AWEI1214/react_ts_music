import React, { memo, useState, useRef, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import {
  BarControl,
  BarOperator,
  BarPlayerInfo,
  PlayerBarWrapper
} from './style'
import { Slider } from 'antd'
import { useAppSelector } from '@/store'
import { formatImgUrl, formatTime } from '@/utils/formatCount'
import { getSongPlayUrl } from '@/utils/handle-player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const currentSong = useAppSelector((state) => state.player.currentSong)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0) // 歌曲总时间
  const [currentTime, setCurrentTime] = useState(0) // 当前播放时间
  const [isSliding, setIsSliding] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  /** 组件内的副作用操作 */
  useEffect(() => {
    // 1.播放音乐
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    // audioRef.current
    //   ?.play()
    //   .then(() => {
    //     setIsPlaying(true)
    //     console.log('歌曲播放成功')
    //   })
    //   .catch((err) => {
    //     setIsPlaying(false)
    //     console.log('歌曲播放失败:', err)
    //   })

    // 2.获取总时长
    setDuration(currentSong.dt)
  }, [currentSong])

  /** 组件内部的事件处理 */
  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }

  /** 音乐播放器进度处理 */
  function handleTimeUpadte() {
    // 当前播放时间
    const currentTime = audioRef.current!.currentTime * 1000

    // 当前歌曲进度
    if (!isSliding) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }
  }

  /** 点击进度条鼠标抬起后 */
  function handleSliderChange(value: number) {
    console.log('777')

    const newCurrentTime = (value / 100) * duration
    audioRef.current!.currentTime = newCurrentTime / 1000
    setCurrentTime(newCurrentTime)
    setProgress(value)
    setIsSliding(false)
  }

  /** 拖动进度条 */
  function handleSliderChangeing(value: number) {
    setIsSliding(true)
    setProgress(value)
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button className="btn sprite_playbar next"></button>
        </BarControl>
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={formatImgUrl(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.al[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider
                onAfterChange={handleSliderChange}
                onChange={handleSliderChangeing}
                step={0.5}
                value={progress}
                tooltip={{ open: false }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        <BarOperator playMode={1}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio ref={audioRef} onTimeUpdate={handleTimeUpadte} />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayerBar)
