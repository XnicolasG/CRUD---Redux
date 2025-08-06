import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const defaultState = [
    {
            id: "u101",
            name: "Freddy Vega",
            email: "freddy.vega@platzi.dev",
            github: "freddier"
        },
        {
            id: "u102",
            name: "Midudev",
            email: "midudev@frontend.esp",
            github: "midudev"
        },
        {
            id: "u103",
            name: "Juan David Castro",
            email: "juandavid.castro@node.la",
            github: "juandc"
        },
        {
            id: "u104",
            name: "Estefanía Aguilar",
            email: "estefania.aguilar@opensource.co",
            github: "teffcode"
        },
        {
            id: "u105",
            name: "Nicolas García",
            email: "nicolasg@devhub.co",
            github: "Xnicolasg"
        }
]

export type UserId = string

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("redux_state")
    if (persistedState){
        return JSON.parse(persistedState).users
    }
    return defaultState
})();



export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action:PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter((user) => user.id !== id)
        }
    }
})

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions