import { configureStore, type Middleware, type PayloadAction, type UnknownAction } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser, type UserWithId } from './users/slice'
import { toast } from "sonner";


const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    localStorage.setItem("redux_state", JSON.stringify(store.getState()))
}

//1:33:00
const syncDatabaseMiddleware: Middleware = store => next => (action) => {
    const { type, payload } = action
    console.log({ type, payload });
    const previousState = store.getState()
    next(action)
    if (type === 'users/deleteUserById') {
        const userToRemove = payload
        let userName: UserWithId[] = previousState.users.find((user: UserWithId) => user.id === userToRemove).name;
        fetch(`https://jsonplaceholder.typicode.com/posts/${userToRemove}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.ok) toast.success(`${userName} has been deleted `)
            })
            .catch((err) => {
                toast.error('Something went wrong')
                if (userToRemove) store.dispatch(rollbackUser(userToRemove))
                console.log(err)
            })
    } else if (type === 'users/addNewUser') {
        const usertoAdd = payload
        // let userInfo: UserWithId[] = previousState.users.find((user: UserWithId) => user.id === usertoAdd);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: usertoAdd.name,
                body: usertoAdd.email,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    toast.success(`${payload.name} has been created`)
                }
                })
                .catch((err) => {
                toast.error('Something went wrong')
                if (usertoAdd) store.dispatch(rollbackUser(usertoAdd))
                console.log(err)
            })
    }else if (type === 'users/updateUserById') {
        const usertoAdd = payload
        // let userInfo: UserWithId[] = previousState.users.find((user: UserWithId) => user.id === usertoAdd).name;
        fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
            method: 'PUT',
            body: JSON.stringify({
                title: usertoAdd.name,
                body: usertoAdd.email,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {
                if (response.ok) {
                    toast.success(`${payload.name} has been updated`)
                }
                })
                .catch((err) => {
                toast.error('Something went wrong')
                if (usertoAdd) store.dispatch(rollbackUser(usertoAdd))
                console.log(err)
            })
    }

}

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => {

        return getDefaultMiddleware().concat([persistanceMiddleware, syncDatabaseMiddleware])
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

