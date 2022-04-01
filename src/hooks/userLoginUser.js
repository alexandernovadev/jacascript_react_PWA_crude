import { gql, useMutation } from '@apollo/client'

export const userLoginUser = () => {
  const LOGIN = gql`
    mutation login($input: UserCredentials!) {
      login(input: $input)
    }
  `
  const [loginMutation, info] = useMutation(LOGIN)

  return [loginMutation, info]
}
