import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import counterRedeuer from './modules/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/index'
import playerReducer from '@/views/player/store/player'

const store = configureStore({
  reducer: {
    counter: counterRedeuer,
    recommend: recommendReducer,
    player: playerReducer
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch

export default store
