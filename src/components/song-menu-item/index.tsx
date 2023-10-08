import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MenuItemWrapper } from './style'
import { formatCount, formatImgUrl } from '@/utils/formatCount'

interface IProps {
  children?: ReactNode
  itemData?: any
}

const SongMenuItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={formatImgUrl(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span className="count">
              <i className="sprite_icon headset"></i>
              {formatCount(itemData.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
