import { Link } from '@reach/router'
import React from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { useGetPhotoWithQuery } from '../hooks/useGetPhotoWithQuery'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id)

  if (loading) return <div>Loading</div>
  if (error) return <div>error</div>

  return (
    <>
      <Link to='/'>BACK</Link>
      <PhotoCard {...data.photo} />
    </>
  )
}
