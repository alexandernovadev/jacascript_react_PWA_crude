import { gql, useQuery } from '@apollo/client'

export const useGetPhotoWithQuery = id => {
  const GET_PHOTO = gql`
    query getSinglePhoto($id: ID!) {
      photo(id: $id) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `

  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { id }
  })

  return { loading, error, data }
}
