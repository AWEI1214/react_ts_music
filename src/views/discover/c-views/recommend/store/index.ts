import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getAlbumRecommend,
  getTopList
} from '../service'

const getBannersAction = createAsyncThunk('banners', async () => {
  const res: any = await getBanners()
  return res.banners
})

const getHotRecommendAction = createAsyncThunk('hotRecommend', async () => {
  const res: any = await getHotRecommend()
  return res.result
})

const getAlbuRecommendAction = createAsyncThunk('album', async () => {
  const res: any = await getAlbumRecommend()
  return res.albums
})

const rankingIds = [19723756, 3779629, 2884035]

const getrankingDataAction = createAsyncThunk('ranking', async () => {
  let res: any = []
  // rankingIds.forEach((item) => {
  //   getTopList({ id: item }).then((result: any) => {
  //     switch (result.playlist.id) {
  //       case 19723756:
  //         res.upRanking = result.playlist
  //         break
  //       case 3779629:
  //         res.newRanking = result.playlist
  //         break
  //       case 2884035:
  //         res.originRanking = result.playlist
  //         break
  //       default:
  //         break
  //     }
  //     console.log('res', res)
  //   })
  // })

  const promises: Promise<any>[] = []
  for (const id of rankingIds) {
    promises.push(getTopList({ id }))
  }
  res = await Promise.all(promises).then((result) => {
    return result.map((item) => item.playlist)
  })
  return res
})

interface IBanners {
  banners: any[]
  hotRecommend: any[]
  albuRecommend: any[]
  // upRanking: any
  // newRanking: any
  // originRanking: any
  rankings: any[]
}

const initialState: IBanners = {
  banners: [],
  hotRecommend: [],
  albuRecommend: [],
  rankings: []
  // upRanking: [],
  // newRanking: [],
  // originRanking: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBannersAction.fulfilled, (state, action) => {
        state.banners = action.payload
      })
      .addCase(getHotRecommendAction.fulfilled, (state, action) => {
        state.hotRecommend = action.payload
      })
      .addCase(getAlbuRecommendAction.fulfilled, (state, action) => {
        state.albuRecommend = action.payload
      })
      .addCase(getrankingDataAction.fulfilled, (state, action) => {
        console.log('action.payload', action.payload)
        state.rankings = action.payload
      })
  }
})

export {
  getBannersAction,
  getHotRecommendAction,
  getAlbuRecommendAction,
  getrankingDataAction
}

export default recommendSlice.reducer
