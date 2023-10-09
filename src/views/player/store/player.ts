import { createSlice } from '@reduxjs/toolkit'

interface IPlyaerState {
  currentSong: any
}

const initialState: IPlyaerState = {
  currentSong: {
    name: '椿',
    id: 479598964,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 12002248,
        name: '沈以诚',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: null,
    fee: 8,
    v: 106,
    crbt: null,
    cf: '',
    al: {
      id: 35533615,
      name: '椿',
      picUrl:
        'https://p1.music.126.net/CpwIPy2YUWC6ksF88eGNyw==/109951162931819035.jpg',
      tns: [],
      pic_str: '109951162931819035',
      pic: 109951162931819040
    },
    dt: 217652,
    h: {
      br: 320000,
      fid: 0,
      size: 8706133,
      vd: 17980,
      sr: 44100
    },
    m: {
      br: 192000,
      fid: 0,
      size: 5223697,
      vd: 20623,
      sr: 44100
    },
    l: {
      br: 128000,
      fid: 0,
      size: 3482479,
      vd: 22416,
      sr: 44100
    },
    sq: null,
    hr: null,
    a: null,
    cd: '1',
    no: 1,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 8256,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 106,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mv: 0,
    cp: 0,
    mst: 9,
    publishTime: 1495263051414
  }
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {}
})

export default playerSlice.reducer
