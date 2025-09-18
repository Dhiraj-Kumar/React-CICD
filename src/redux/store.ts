// import { configureStore } from "@reduxjs/toolkit";
// import appReducer from "./appSlice";

// const store = configureStore({
//     reducer: appReducer
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./appSlice";

const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    app: appReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultSerializer) => getDefaultSerializer({ serializableCheck: false })
});

export default store;