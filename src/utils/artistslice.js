import { createSlice } from "@reduxjs/toolkit";

const artistslice = createSlice({
    name : "artist",
    initialState : {
        artistarr : {},
    },
    reducers : {
        addartist : (state, action)=>{
            state.artistarr = action.payload;
        }
    }
})

export const {addartist} = artistslice.actions;
export default artistslice.reducer;
