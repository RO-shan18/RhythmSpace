import { createSlice } from "@reduxjs/toolkit";

const Episodeslice = createSlice({
    name: "Episodes",
    initialState : {
        Episodearr : {},
    },
    reducers : {
        addEpisodes : (state, action)=>{
            state.Episodearr = action.payload;
        },

        removeEpisodes : (state)=>{
            state.Episodearr = "";
        }
    }
})

export const{addEpisodes, removeEpisodes} = Episodeslice.actions;
export default Episodeslice.reducer;