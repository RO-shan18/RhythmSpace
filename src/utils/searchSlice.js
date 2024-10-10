import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "search",
    initialState : {},
    reducers : {
        addsearch : (state, action) =>{
            state = Object.assign(state, action.payload)

            const keys = Object.keys(state);

            if(keys.length > 10)
            delete state[keys[0]];
    }
}})

export const{addsearch} = SearchSlice.actions;
export default SearchSlice.reducer;