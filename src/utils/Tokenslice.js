import { createSlice } from "@reduxjs/toolkit";

const Tokenslice = createSlice({
    name: "token",
    initialState : {
        accesstoken : null,
    },
    reducers : {
        addaccesstoken : (state, action) =>{
            state.accesstoken = action.payload;
        }
    }
})

export const {addaccesstoken} = Tokenslice.actions;
export default Tokenslice.reducer;