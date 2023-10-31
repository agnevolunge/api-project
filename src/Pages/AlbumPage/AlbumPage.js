import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { Link, useParams } from 'react-router-dom'

const AlbumPage = () => {

    const { id } = useParams()

    const [album, setAlbum] = useState(null)

    useEffect(() => {
        const fetchAlbum = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}?_expand=user&_embed=photos`)
            const albumData = await res.json()

            setAlbum(albumData)
        }
        fetchAlbum()
    }, [id])
    
    
    if (!album) {
        return (
          <Container>
            <h3>Loading...</h3>
          </Container>
        )
    }
    const { photos } = album

  return (
    <Container>
        <h1>Title: {album.title}</h1>
        <p>
            <Link to={`/users/${id}`}>{album.user.name}</Link>
        </p>
        <div className="photos-list">
            {photos.map((photo) => {
                return <img src={photo.thumbnailUrl} alt={photo.title} key={photo.id} />
            })}
        </div>
    </Container>
   
  )
}

export default AlbumPage


// 8. Sukurti naują puslapį album.html ir jame atvaizduoti:
//   8.1. Albumo pavadinimą.
//   8.2. Album autoriaus vardą. Paspaudus ant vardo - nukreipiama į autoriaus puslapį.
//   8.3. Skiltis, kurioje atvaizduojamos visos albumo nuotraukos. Panaudoti library (biblioteką), kuri skirta gražiam galerijos atvaizdavimui, pvz.:
//     8.3.1. https://photoswipe.com/
//     8.3.2. https://nanogallery2.nanostudio.org/
//     8.3.3. https://sachinchoolur.github.io/lightgallery.js/
//     8.3.4. Arba bet kurią kitą.
