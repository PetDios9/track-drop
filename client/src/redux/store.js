import {configureStore} from '@reduxjs/toolkit'
import postsReducer from './slices/postsState'

export default configureStore({
    reducer: {
        posts: postsReducer
    }
}) 