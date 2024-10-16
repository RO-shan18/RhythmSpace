import { createSlice } from "@reduxjs/toolkit";

const artistslice = createSlice({
    name : "artist",
    initialState : {
        artistarr : {},
    },
    reducers : {
        addartist : (state, action)=>{
            state.artistarr = action.payload;
        },

        removeartist : (state)=>{
            state.artistarr = "";
        }
    }
})

export const {addartist, removeartist} = artistslice.actions;
export default artistslice.reducer;
