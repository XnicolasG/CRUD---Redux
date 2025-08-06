import type React from "react"
import { useUserActions } from "../hooks/useUserActions"
import { useState } from "react"


export const CreateNewUser = () => {
    const [result, setResult] = useState<'ok' | 'ko' | null>(null)
    const { addUser } = useUserActions()

    const showResult = (status: 'ok' | 'ko') => {
        setResult(status);
        setTimeout(() => setResult(null), 3000);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if (!name.trim() || !email.trim().includes('@') || !github.trim()) {
           return showResult('ko')
        }
        showResult('ok')
        addUser({ name, email, github });
        form.reset()
    }

    return (
        <section className='mx-auto max-w-2xl p-2 border-2 border-gray-300 hover:border-blue-300 rounded my-2 hover:shadow-2xl transition-all duration-150'>
            <h3 className="text-lg w-full flex justify-center font-semibold">Create new user</h3>
            <form onSubmit={handleSubmit} >
                <input name="name" className="w-full outline-0 px-1 border-2 border-gray-300 rounded my-1" placeholder="Type your name"  />
                <input name="email" type="email" className="w-full outline-0 px-1 border-2 border-gray-300 rounded my-1" placeholder="Type your email"  />
                <input name="github" className="w-full outline-0 px-1 border-2 border-gray-300 rounded my-1" placeholder="Type your Github"  />

                <div className="w-full flex flex-col justify-center items-center">
                    <button
                        className="mx-auto w-fit p-1 rounded bg-blue-500 text-slate-100 px-2 hover:bg-blue-600 "
                        type="submit"
                    >
                        Create
                    </button>
                    <span aria-live="polite">
                        {result === 'ok' && <p className="text-emerald-400">User created sucessfully</p>}
                        {result === 'ko' && <p className="text-red-400">Some fields are missing</p>}
                    </span>
                </div>
            </form>
        </section>
    )
}
