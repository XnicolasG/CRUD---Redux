import { CreateNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUSers'

export const App = () => {
  return (
    <section>
        <ListOfUsers />
        <CreateNewUser />
    </section>
  )
}
