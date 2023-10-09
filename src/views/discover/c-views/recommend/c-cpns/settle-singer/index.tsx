import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import { formatImgUrl } from '@/utils/formatCount'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const settleSingeres: any[] = useAppSelector(
    (state) => state.recommend.settleSingers
  )
  return (
    <SingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部"
        moreLink="/discover/artist"
      />
      <div className="artists">
        {settleSingeres.map((item) => {
          return (
            <a href="/discover/artist" className="item" key={item.picUrl}>
              <img src={formatImgUrl(item.picUrl, 63)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a
          target="_blank"
          href="https://music.163.com/st/musician"
          rel="noreferrer"
        >
          申请成为网易音乐人
        </a>
      </div>
    </SingerWrapper>
  )
}

export default memo(SettleSinger)
