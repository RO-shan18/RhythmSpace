import { createSlice } from "@reduxjs/toolkit";

const Trackslice = createSlice({
    name : "Trackslice",
    initialState : {
        Trackarr : {},
    },
    reducers : {
        addTrack : (state, action)=>{
            state.Trackarr = action.payload;
        }
    }
})

export const {addTrack} = Trackslice.actions;
export default Trackslice.reducer;
