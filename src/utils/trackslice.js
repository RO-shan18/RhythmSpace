import { createSlice } from "@reduxjs/toolkit";

const Trackslice = createSlice({
    name : "Trackslice",
    initialState : {
        Trackarr : {},
    },
    reducers : {
        addTrack : (state, action)=>{
            state.Trackarr = action.payload;
        },

        removeTrack :(state) =>{
            state.Trackarr = "";
        }
    }
})

export const {addTrack, removeTrack} = Trackslice.actions;
export default Trackslice.reducer;
