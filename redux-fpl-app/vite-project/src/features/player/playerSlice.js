import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getURL from '../../api/api'
import { teams } from '../../data/teams'

const initialState = {
  loading: false,
  fixtures:[],
  history:[],
  history_past:[],
  teams:teams,
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchPlayer = createAsyncThunk('player/fetchPlayer', (args) => {
  const url=getURL(args)
  console.log(url)
  return axios
    .get(url)
    .then(response => response.data)
})

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    removeplayers: (state) => {
        state.fixtures =[]
        state.history = []
        state.history_past = []
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPlayer.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchPlayer.fulfilled, (state, action) => {
      state.loading = false
      state.fixtures = action.payload.fixtures
      state.history = action.payload.history
      state.history_past = action.payload.history_past
      state.error = ''
    })
    builder.addCase(fetchPlayer.rejected, (state, action) => {
      state.loading = false
      state.fixtures =[]
      state.history = []
      state.history_past = []
      state.error = action.error.message
    })
  }
})
export const {removeplayers}=playerSlice.actions
export default playerSlice.reducer