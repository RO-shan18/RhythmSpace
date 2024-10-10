import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tokenreducer from "./Tokenslice";
import artistreducer from "./artistslice";
import albumreducer from "./albumSlice";
import Episodesreducer from "./episodeslice";
import Showsreducer from "./showslice";
import Showsepisodereducer from "./showsepisodeslice";
import Artisttracksreducer from "./Artisttrackslice";
import Searchreducer from "./searchSlice";
import Searchresultsreducer from "./searchresultSlice";

const persistconfig = {
    key : "root",
    storage
}

const reducer = combineReducers({
       token : tokenreducer,
       artist : artistreducer,
       album : albumreducer,
       Episode : Episodesreducer,
       Show : Showsreducer,
       Showsepi : Showsepisodereducer,
       Artisttrack : Artisttracksreducer,
       Searchresults : Searchresultsreducer,
       Search : Searchreducer,
})

const PersistReducer = persistReducer(persistconfig, reducer);

const appStore = configureStore({
    reducer : PersistReducer,
})

const persistor = persistStore(appStore)

export {persistor, appStore};