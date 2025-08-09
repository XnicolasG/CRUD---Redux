
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useAppSelector } from '../hooks/store';
import { useUserActions } from '../hooks/useUserActions';
import { Edit } from './icons/Edit';
import { Erase } from './icons/Erase';



export const ListOfUsers = () => {
    const [animationParent] = useAutoAnimate()
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
                <tbody
                    ref={animationParent}
                    className='bg-white'>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="ease-in-out bg-white hover:bg-blue-200 transition-all duration-200 border-t-2  border-t-gray-400 rounded-md"
                        >
                            <td className="px-4 py-3 align-middle">{(user.id).slice(0, 4)}</td>

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
                                <button 
                                aria-label="edit"
                                onClick={() => console.log(user)
                                }
                                >
                                    <Edit />
                                </button>

                                {/* Eliminar */}
                                <button
                                    aria-label="remove item"
                                    onClick={() => removeUser(user.id)}
                                >
                                    <Erase />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}