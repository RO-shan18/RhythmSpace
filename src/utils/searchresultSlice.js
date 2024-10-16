import { createSlice } from "@reduxjs/toolkit";

const SearchresultSlice = createSlice({
    name: "Searchresult",
    initialState : {
        Searchresultarr : {},
    },
    reducers : {
        addsearchresults : (state, action)=>{
            state.Searchresultarr = action.payload;
        }
    }
})

export const{addsearchresults} = SearchresultSlice.actions;
export default SearchresultSlice.reducer;