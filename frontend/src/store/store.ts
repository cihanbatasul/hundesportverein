import {configureStore} from '@reduxjs/toolkit'
import navSlice from './navSlice'

const store = configureStore({
    reducer: {
        navSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>