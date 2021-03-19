import { useAllUsersQuery } from '../generated/graphql'

export const Home = (): JSX.Element => {
  const [allUserQueryRes] = useAllUsersQuery()
  const { data, fetching, error } = allUserQueryRes
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no...{error.message}</p>
  return (
    <div>
      {data.allUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Home
