import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react';
import type { UserWithId } from '../store/users/slice';
import { useUserActions } from '../hooks/useUserActions';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  user: UserWithId | null;
}

export const Modal = ({ isOpen, onClose, user }: Props) => {
  const [userToUpdate, setUserToUpdate] = useState(user)
  useEffect(() => setUserToUpdate(user), [user])
  
  const { updateUser } = useUserActions()

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    setUserToUpdate({ id : user?.id ?? '' , name, email, github })
    const updatedUser: UserWithId = { id: user?.id ?? '', name, email, github };

    console.log(updatedUser);
    
    updateUser(updatedUser)
    form.reset()
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <DialogPanel className="bg-white rounded-lg p-6 shadow-xl w-full max-w-md z-10">
        <DialogTitle className="text-lg font-semibold mb-4">Edit user: {userToUpdate?.name ?? ''}</DialogTitle>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className='text-blue-600 text-sm' htmlFor="name">Name</label>
          <input name="name" className="w-full border px-3 py-2 rounded" />
          <label className='text-blue-600 text-sm' htmlFor="email">Email</label>
          <input name="email" className="w-full border px-3 py-2 rounded" />
          <label className='text-blue-600 text-sm' htmlFor="github">Github</label>
          <input name="github" className="w-full border px-3 py-2 rounded" />
          <div className="flex justify-end gap-2 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </DialogPanel>
    </Dialog>

  )
}
