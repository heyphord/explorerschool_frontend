import { configureStore } from '@reduxjs/toolkit'

import rootReducer from '../reducers';

//redux persist imports
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    devTools: true,
    reducer: persistedReducer,
});

export const persistor = persistStore(store);
export default store;