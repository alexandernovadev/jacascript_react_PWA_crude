import { gql, useMutation } from '@apollo/client'

export const useLikePhoto = id => {
  const LIKE_PHOTO = gql`
    mutation likePhoto($input: LikePhoto!) {
      likePhoto(input: $input) {
        id
        liked
        likes
      }
    }
  `
  const [toggleLike] = useMutation(LIKE_PHOTO)
  return [toggleLike]
}
