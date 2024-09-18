import { createSlice } from "@reduxjs/toolkit";

const searcharitistslice = createSlice({
    name: "searchartist",
    initialState: {
        searchartist : {},
    },
    reducers : {
        addsearchartist : (state, action) =>{
            state.searchartist = action.payload;
        }
    }
})

export const{addsearchartist} = searcharitistslice.actions;
export default searcharitistslice.reducer;