import { gql, useMutation } from '@apollo/client'

export const useRegisterUser = () => {
  const REGISTER_USER = gql`
    mutation signup($input: UserCredentials!) {
      signup(input: $input)
    }
  `
  const [registerMutation, info] = useMutation(REGISTER_USER)

  return [registerMutation, info]
}
