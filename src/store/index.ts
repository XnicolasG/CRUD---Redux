import { configureStore, Tuple } from "@reduxjs/toolkit";
import usersReducer from './users/slice'


const persistanceMiddleware = (store) => (next) => (action) => {
    console.log(store.getState());
    console.log(action);
    next(action)
    localStorage.setItem("redux_state", JSON.stringify(store.getState()))  
}

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => {

    return getDefaultMiddleware().concat(persistanceMiddleware)
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

