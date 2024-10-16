import { createSlice } from "@reduxjs/toolkit";

const albumSlice = createSlice({
    name: "album",
    initialState : {
        albumsarr : {},
    },
    reducers : {
        addAlbums : (state, action)=>{
            state.albumsarr = action.payload;
        },

        removeAlbums : (state)=>{
            state.albumsarr = "";
        }
    }
})

export const{addAlbums, removeAlbums} = albumSlice.actions;
export default albumSlice.reducer;