import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getURL from '../../api/api'

const initialState = {
  loading: false,
  events:[],
  teams:[],
  elements:[],
  element_stats:[],
  element_types:[],
  total_players:0,
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchBootstrap = createAsyncThunk('bootstrap/fetchBootstrap', () => {
  const url=getURL({type:'BOOTSTRAP'})
  console.log('Fetching Bootstrap...')
  return axios
    .get(url)
    .then(response => response.data)
})

const bootstrapSlice = createSlice({
  name: 'bootstrap',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchBootstrap.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchBootstrap.fulfilled, (state, action) => {
      state.loading = false
      state.events=action.payload.events
      state.teams=action.payload.teams
      state.elements=action.payload.elements
      state.element_stats=action.payload.element_stats
      state.element_types=action.payload.element_types
      state.total_players=0
      state.error = ''
    })
    builder.addCase(fetchBootstrap.rejected, (state, action) => {
      state.loading = false
      state.events=[]
      state.teams=[]
      state.elements=[]
      state.element_stats=[]
      state.element_types=[]
      state.total_players=0
      state.error = ''
      state.error = action.error.message
    })
  }
})

export default bootstrapSlice.reducer