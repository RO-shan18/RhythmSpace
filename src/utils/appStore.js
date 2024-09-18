import { configureStore } from "@reduxjs/toolkit";
import tokenreducer from "./Tokenslice";
import searchartistreducer from "./searcharitstslice";
import artistreducer from "./artistslice";

const appStore = configureStore({
    reducer : {
       token : tokenreducer,
       searchartist : searchartistreducer,
       artist : artistreducer,
    }
})

export default appStore;