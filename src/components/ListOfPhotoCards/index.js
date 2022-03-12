import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(whithPhotos)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const photos = data.photos

  return (
    <ul>
      {photos.map(photo => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

const whithPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
