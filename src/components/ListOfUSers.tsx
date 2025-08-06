
import { useAppSelector } from '../hooks/store';
import { useUserActions } from '../hooks/useUserActions';



export const ListOfUsers = () => {
    const users = useAppSelector((state) => state.users)
    const { removeUser } = useUserActions()

    return (
        <div className="mx-auto max-w-2xl border-2 bg-slate-100 border-gray-300 my-4 shadow-xl overflow-hidden rounded-xl p-2">
            <section className='flex gap-x-2 px-4'>
                <p className='text-gray-700'>Users</p>
                <span className=' size-6 justify-center flex rounded-full bg-blue-200 text-blue-600'>{users.length}</span>
            </section>
            <table className="w-full table-auto text-left border-separate border-spacing-y-2">
                <thead>
                    <tr className=" text-gray-700">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2 text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="bg-white hover:bg-blue-200 transition-all duration-200 border-t-2  border-t-gray-400 rounded-md"
                        >
                            <td className="px-4 py-3 align-middle">{(user.id).slice(0,4)}</td>

                            <td className="px-4 py-3 flex items-center gap-2">
                                <img
                                    className="size-10 rounded-full"
                                    src={`https://unavatar.io/github/${user.github}`}
                                    alt={user.name}
                                />
                                {user.name}
                            </td>

                            <td className="px-4 py-3 align-middle">{user.email}</td>

                            <td className="px-4 py-3 flex gap-3 justify-center">
                                {/* Editar */}
                                <button aria-label="edit">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-6 hover:text-emerald-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                    </svg>
                                </button>

                                {/* Eliminar */}
                                <button
                                    aria-label="remove item"
                                    onClick={() => removeUser(user.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-6 hover:text-red-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}