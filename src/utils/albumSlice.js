import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
    name: "album",
    initialState : {
        albumsarr : {},
    },
    reducers : {
        addAlbums : (state, action)=>{
            state.albumsarr = action.payload;
        }
    }
})

export const{addAlbums} = albumSlice.actions;
export default albumSlice.reducer;