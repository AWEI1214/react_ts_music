import { useAppSelector } from '@/store'
import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const Banner: FC<IProps> = () => {
  const banner = useAppSelector((state) => state.recommend.banners)

  const [currentIndex, setCurrentIndex] = useState(0)

  /** 定义组件数据 */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /** 点击轮播图两侧按钮*/
  const handleArrowClick = (type: number) => {
    if (type === 1) {
      bannerRef.current?.prev()
    } else if (type === 2) {
      bannerRef.current?.next()
    }
  }

  /** 切换轮播图回调 */
  const handleAfterChnge = (current: number, newCurrent: number) => {
    setCurrentIndex(newCurrent)
  }

  let bgImageUrl = banner[currentIndex]?.imageUrl
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20'
  }

  return (
    <BannerWrapper
      style={{ background: `url('${bgImageUrl}') center center / 6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            effect="fade"
            beforeChange={handleAfterChnge}
            autoplay
            autoplaySpeed={4000}
          >
            {banner.map((item) => {
              return (
                <div className="banner-item" key={item.url}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => handleArrowClick(1)}
          ></button>
          <button
            className="btn right"
            onClick={() => handleArrowClick(2)}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(Banner)
