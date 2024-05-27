import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {infoProductGetServer} from '../../TypeScriptTypes/InfoProductTypes'

export const getProductInfoServer = createAsyncThunk(
    "productInfo/getProductinfo",
    async(id:string | undefined) => {
        const response = await fetch(`https://db-perfume.liara.run/productInfo/${id}`)
        const data = await response.json()
        return data as infoProductGetServer
    }
)


const slice = createSlice({
    name:'productInfo',
    initialState:{} as infoProductGetServer,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProductInfoServer.fulfilled, (state, action) => {
            console.log(state)
           return action.payload
        })
      },
})

export default slice.reducer