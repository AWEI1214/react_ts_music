import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getAlbumRecommend,
  getTopList,
  getArtist
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

  const promises: Promise<any>[] = []
  for (const id of rankingIds) {
    promises.push(getTopList({ id }))
  }
  res = await Promise.all(promises).then((result) => {
    return result.map((item) => item.playlist)
  })
  return res
})

const getArtistListAction = createAsyncThunk('artist', async () => {
  const res: any = await getArtist()
  return res.artists
})

interface IBanners {
  banners: any[]
  hotRecommend: any[]
  albuRecommend: any[]
  rankings: any[]
  settleSingers: any[]
}

const initialState: IBanners = {
  banners: [],
  hotRecommend: [],
  albuRecommend: [],
  rankings: [],
  settleSingers: []
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
        state.rankings = action.payload
      })
      .addCase(getArtistListAction.fulfilled, (state, action) => {
        state.settleSingers = action.payload
      })
  }
})

export {
  getBannersAction,
  getHotRecommendAction,
  getAlbuRecommendAction,
  getrankingDataAction,
  getArtistListAction
}

export default recommendSlice.reducer
