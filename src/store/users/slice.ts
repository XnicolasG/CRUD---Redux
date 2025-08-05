import { createSlice } from "@reduxjs/toolkit";

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: string;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export default usersSlice.reducer;