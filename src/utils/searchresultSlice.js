import { createSlice } from "@reduxjs/toolkit";

const SearchresultSlice = createSlice({
    name: "Searchresults",
    initialState : {
        Searchresults : {},
    },
    reducers : {
        addsearchresults : (state, action)=>{
            state.Searchresults = action.payload;
        }
    }
})

export const{addsearchresults} = SearchresultSlice.actions;
export default SearchresultSlice.reducer;