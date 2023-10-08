import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import {
  getBannersAction,
  getHotRecommendAction,
  getAlbuRecommendAction,
  getrankingDataAction
} from './store'
import { useAppDispatch } from '@/store'
import Banner from './c-cpns/banner'
import { RecommendWrapper } from './style'
import Hot from './c-cpns/hot'
import Album from './c-cpns/album'
import TopRanking from './c-cpns/top-ranking'

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
          <div className="right">right</div>
        </div>
      </RecommendWrapper>
    </div>
  )
}

export default memo(Recommend)
