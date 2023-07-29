import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getURL from '../../api/api'

const initialState = {
  loading: false,
  manager: {},
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchmanager = createAsyncThunk('manager/fetchmanager', (managerid) => {
  const url=getURL({type:'MANAGER',managerid:managerid})
  console.log(url)
  return axios
    .get(url)
    .then(response => response.data)
})

const managerSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {
    removeManager: (state) => {
      console.log('removing manager state')
      state.manager = {};
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchmanager.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchmanager.fulfilled, (state, action) => {
      state.loading = false
      state.manager = action.payload
      state.error = ''
    })
    builder.addCase(fetchmanager.rejected, (state, action) => {
      state.loading = false
      state.manager = {}
      state.error = action.error.message
    })
  }
})
export const {removeManager}=managerSlice.actions
export default managerSlice.reducer