import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tokenreducer from "./Tokenslice";
import artistreducer from "./artistslice";
import albumreducer from "./albumSlice";
import Showsreducer from "./showslice";
import Showsepisodereducer from "./showsepisodeslice";
import Searchreducer from "./searchSlice";
import Searchresultsreducer from "./searchresultSlice";

import Trackreducer from "./trackslice";

const persistconfig = {
    key : "root",
    storage,
    blacklist: ["largeStateSlice"], // Add slices of state you don't want to persist
}

const reducer = combineReducers({
       token : tokenreducer,
       artist : artistreducer,
       album : albumreducer,
       Show : Showsreducer,
       Showsepi : Showsepisodereducer,
       SearchResults : Searchresultsreducer,
       Search : Searchreducer,
       Track : Trackreducer,
})

const PersistReducer = persistReducer(persistconfig, reducer);

const appStore = configureStore({
    reducer : PersistReducer,
})

const persistor = persistStore(appStore)

export {persistor, appStore};