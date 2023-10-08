import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    number: 123
  },
  reducers: {}
})

export default counterSlice.reducer
