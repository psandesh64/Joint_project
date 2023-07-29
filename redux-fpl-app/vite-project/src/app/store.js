import { configureStore } from '@reduxjs/toolkit'

import fixtureReducer from '../features/fixtures/fixtureSlice'
import bootstrapReducer from '../features/bootstrap/bootstrapSlice'
import playerReducer from '../features/player/playerSlice'
import managerReducer from '../features/manager/managerSlice'

const store = configureStore({
  reducer: {
    bootstrap:bootstrapReducer,
    fixture: fixtureReducer,
    player:playerReducer,
    manager:managerReducer,
  }
})

export default store