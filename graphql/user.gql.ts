import gql from 'graphql-tag'

export const AllUserQuery = gql`
  query AllUsers {
    allUsers {
      id
      name
    }
  }
`

export const createUserMutation = gql`
    mutation 
`
