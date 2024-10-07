import { createSlice } from "@reduxjs/toolkit";

const Showsepisodeslice = createSlice({
    name: "ShowEpisodes",
    initialState : {
        Showsepisodearr : {},
    },
    reducers : {
        addShowsepisodes : (state, action)=>{
            state.Showsepisodearr = action.payload;
        }
    }
})

export const{addShowsepisodes} = Showsepisodeslice.actions;
export default Showsepisodeslice.reducer;