import { createSlice } from "@reduxjs/toolkit";

const ArtisttrackSlice = createSlice({
    name: "Artisttracks",
    initialState : {
        Artisttracksarr : {},
    },
    reducers : {
        addArtisttracks : (state, action)=>{
            state.Artisttracksarr = action.payload;
        }
    }
})

export const{addArtisttracks} = ArtisttrackSlice.actions;
export default ArtisttrackSlice.reducer;