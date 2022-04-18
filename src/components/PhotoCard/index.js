import React from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLikePhoto } from '../../hooks/useLikePhoto'
import { Link } from '@reach/router'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const [toggleLike] = useLikePhoto()

  const handleFavButtonClick = () => {
    // setLiked(!liked)
    toggleLike({ variables: { input: { id } } })
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <Button onClick={handleFavButtonClick}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
