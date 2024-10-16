import { createSlice } from "@reduxjs/toolkit";

const Showslice = createSlice({
    name: "Shows",
    initialState : {
        Showsarr : {},
    },
    reducers : {
        addShows : (state, action)=>{
            state.Showsarr = action.payload;
        },

        removeshows : (state)=>{
            state.Showsarr = "";
        }
    }
})

export const{addShows, removeshows} = Showslice.actions;
export default Showslice.reducer;