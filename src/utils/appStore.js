import { configureStore } from "@reduxjs/toolkit";
import tokenreducer from "./Tokenslice";
import searchartistreducer from "./searcharitstslice";
import artistreducer from "./artistslice";
import albumreducer from "./albumSlice";
import Episodesreducer from "./episodeslice";
import Showsreducer from "./showslice";

const appStore = configureStore({
    reducer : {
       token : tokenreducer,
       searchartist : searchartistreducer,
       artist : artistreducer,
       album : albumreducer,
       Episode : Episodesreducer,
       Show : Showsreducer,
    }
})

export default appStore;