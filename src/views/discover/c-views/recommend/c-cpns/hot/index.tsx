import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const Hot: FC<IProps> = () => {
  const hotRecommends = useAppSelector(
    (state) => state.recommend.hotRecommend
  ).slice(0, 8)

  console.log(hotRecommends)
  return (
    <RecommendWrapper>
      <AreaHeaderV1 title="热门推荐" />

      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(Hot)
