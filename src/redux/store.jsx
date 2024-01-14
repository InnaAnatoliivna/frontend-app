import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { jobsReducer } from './jobs/jobsSlice';
import { authReducer } from './auth/userSlice';
import { mapsTilesReducer } from './mapTiles/mapTilesSlice';
import { offersReducer } from './offers/offersSlice';
import { citiesReducer } from './simc/simsSlice';
import { provincesReducer } from './terc/tercSlice';
import { usersReducer } from './users/usersSlice';
import { filtersReducer } from './filters/filtersSlice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        jobs: jobsReducer,
        maps: mapsTilesReducer,
        offers: offersReducer,
        cities: citiesReducer,
        provinces: provincesReducer,
        users: usersReducer,
        filters: filtersReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export const persistor = persistStore(store);