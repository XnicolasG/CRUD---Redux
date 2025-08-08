import { Toaster } from 'sonner'
import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUSers'

export const App = () => {
  return (
    <section>
        <CreateNewUser />
        <ListOfUsers />
        <Toaster richColors />
    </section>
  )
}
