import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getURL from '../../api/api'
import { teams } from '../../data/teams'

const initialState = {
  loading: false,
  fixtures: [],
  teams:teams,
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchFixtures = createAsyncThunk('fixture/fetchFixtures', (gameweek) => {
  const url=getURL({type:'FIXTURES',eventid:gameweek})
  console.log(url)
  return axios
    .get(url)
    .then(response => response.data)
})

const fixtureSlice = createSlice({
  name: 'fixture',
  initialState,
  reducers: {
    removeFixtures: (state) => {
      state.fixtures = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFixtures.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchFixtures.fulfilled, (state, action) => {
      state.loading = false
      state.fixtures = action.payload
      state.error = ''
    })
    builder.addCase(fetchFixtures.rejected, (state, action) => {
      state.loading = false
      state.fixtures = []
      state.error = action.error.message
    })
  }
})
export const {removeFixtures}=fixtureSlice.actions
export default fixtureSlice.reducer