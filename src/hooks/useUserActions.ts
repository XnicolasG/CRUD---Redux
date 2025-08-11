import { addNewUser, deleteUserById, updateUserById, type User, type UserId, type UserWithId } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
    const dispatch = useAppDispatch()

    const addUser = ({ name, email, github }: User) => {
        dispatch(addNewUser({ name, email, github }))
    }

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id));
    }
    const updateUser = ({id, name, email, github}: UserWithId) => {
        dispatch(updateUserById({id, name, email, github}))
    }
    return { addUser, removeUser, updateUser }
} 