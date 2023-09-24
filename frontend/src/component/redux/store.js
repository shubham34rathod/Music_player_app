
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slice/userSlice.js'
import {persistStore,persistReducer} from 'redux-persist'
import  storage  from 'redux-persist/lib/storage'

const persistConfig={
    key:'iws',
    storage
}

const  persistAuthReducer=persistReducer(persistConfig,userReducer)

export const store=configureStore({
    reducer:{
        user:persistAuthReducer
    }
})

export const persistedStore=persistStore(store)