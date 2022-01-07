import { createSlice,  createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async() => {
        const response = await axios.get('http://localhost:4000/posts')
        return response.data
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.isLoading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
            state.isLoading = false
        },
        [getPosts.rejected] : (state) => {
            state.isLoading = false
        }
    }
})

export default postsSlice.reducer