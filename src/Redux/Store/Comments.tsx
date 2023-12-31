import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {allCommentGetServer} from '../../TypeScriptTypes/CommentTypes'


export const getCommentsServer = createAsyncThunk(
    "comments/getComments",
    async() => {
        const response = await fetch('http://localhost:3000/comments')
        const data = await response.json()
        return data as allCommentGetServer[] 
    }
)

export const postCommentsServer = createAsyncThunk(
    "comments/postComments",
    async(newComment:allCommentGetServer) => {
        const response = await fetch('http://localhost:3000/comments',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(newComment)
        })
        const data = await response.json()
        return data as allCommentGetServer
    }
)


const slice = createSlice({
    name:'comments',
    initialState:[] as allCommentGetServer[],
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getCommentsServer.fulfilled, (state, action) => {
           return action.payload
        })
        builder.addCase(postCommentsServer.fulfilled, (state, action) => {
           return [...state,action.payload]
        })
      },
})

export default slice.reducer