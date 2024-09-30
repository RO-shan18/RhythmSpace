import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import tokenreducer from "./Tokenslice";
import searchartistreducer from "./searcharitstslice";
import artistreducer from "./artistslice";
import albumreducer from "./albumSlice";
import Episodesreducer from "./episodeslice";
import Showsreducer from "./showslice";

const persistconfig = {
    key : "root",
    storage
}

const reducer = combineReducers({
       token : tokenreducer,
       searchartist : searchartistreducer,
       artist : artistreducer,
       album : albumreducer,
       Episode : Episodesreducer,
       Show : Showsreducer,
})

const PersistReducer = persistReducer(persistconfig, reducer);

const appStore = configureStore({
    reducer : PersistReducer,
})

const persistor = persistStore(appStore)

export {persistor, appStore};