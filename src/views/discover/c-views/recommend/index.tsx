import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  getBannersAction,
  getHotRecommendAction,
  getAlbuRecommendAction,
  getrankingDataAction,
  getArtistListAction
} from './store'
import { useAppDispatch } from '@/store'
import Banner from './c-cpns/banner'
import { RecommendWrapper } from './style'
import Hot from './c-cpns/hot'
import Album from './c-cpns/album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}
const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getBannersAction())
    dispatch(getHotRecommendAction())
    dispatch(getAlbuRecommendAction())
    dispatch(getrankingDataAction())
    dispatch(getArtistListAction())
  }, [dispatch])

  return (
    <div>
      <RecommendWrapper>
        <Banner />
        <div className="content wrap-v2">
          <div className="left">
            <Hot />
            <Album />
            <TopRanking />
          </div>
          <div className="right">
            <UserLogin />
            <SettleSinger />
            <HotAnchor />
          </div>
        </div>
      </RecommendWrapper>
    </div>
  )
}

export default memo(Recommend)
