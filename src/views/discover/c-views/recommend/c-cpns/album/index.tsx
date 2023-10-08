import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { AlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1'
import { Carousel } from 'antd'
import { useAppSelector } from '@/store'
import NewAlbumItem from '@/components/new-album-item'

interface IProps {
  children?: ReactNode
}

const Album: FC<IProps> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  const newAlbums = useAppSelector((state) => state.recommend.albuRecommend)

  /** 点击轮播图两侧按钮*/
  const handleArrowClick = (type: number) => {
    if (type === 1) {
      bannerRef.current?.prev()
    } else if (type === 2) {
      bannerRef.current?.next()
    }
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => handleArrowClick(1)}
        ></button>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list" key={item}>
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return (
                        <NewAlbumItem
                          itemData={album}
                          key={album.id}
                        ></NewAlbumItem>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => handleArrowClick(2)}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(Album)
