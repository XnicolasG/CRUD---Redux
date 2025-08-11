import { Dialog } from '@headlessui/react'
import type { UserWithId } from '../store/users/slice';
import { useEffect, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: boolean;
  user: UserWithId;
}

export const Modal= ({ isOpen, onClose, user}: Props) => {
  const [ userToUpdate, setUserToUpdate] = useState(user)
  useEffect(() => setUserToUpdate(user), [user])

  const handleChange = () => {}

  return (
    <Dialog open={isOpen}>
        
    </Dialog>
  )
}
