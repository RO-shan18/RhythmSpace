import { createSlice } from "@reduxjs/toolkit";

const Showslice = createSlice({
    name: "Shows",
    initialState : {
        Showsarr : {},
    },
    reducers : {
        addShows : (state, action)=>{
            state.Showsarr = action.payload;
        }
    }
})

export const{addShows} = Showslice.actions;
export default Showslice.reducer;