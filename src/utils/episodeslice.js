import { createSlice } from "@reduxjs/toolkit";

const Episodeslice = createSlice({
    name: "Episodes",
    initialState : {
        Episodearr : {},
    },
    reducers : {
        addEpisodes : (state, action)=>{
            state.Episodearr = action.payload;
        }
    }
})

export const{addEpisodes} = Episodeslice.actions;
export default Episodeslice.reducer;