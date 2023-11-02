import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { Link } from 'react-router-dom'

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const fetchAlbums = async() => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=15&_expand=user&_embed=photos`)
      const albumsData = await res.json()

      setAlbums(albumsData)
    }
    fetchAlbums()
  })

  if (albums.length === 0) {
    return (
      <Container>
      <h1> Loading ...</h1>
    </Container>
    )
  }
  

  return (
    <Container>
      <h1>Albums Page</h1>
      <div className="albums-wrapper">
       <ul className="albums-list">
          {albums.map((album) => (
            <li key={albums.id} className="albums-item">
             <Link to={`/albums/${album.id}`} className='album-link'>{album.title} (Album Title)</Link>  
             <div className="author-link">
              <Link to={`/users/${album.user.id}`}>{album.user.name}(Album author)</Link> - ({album.photos.length} Photos) 
              </div>
              <div className="random-image">
               <Link to={`/users/${album.user.id}`}>
                <img src={album.photos[0].thumbnailUrl} alt="" key={album.id} />
               </Link>
              </div>
             
            </li>
          ))}
        </ul>
      </div>
    </Container>
   
  )
}

export default AlbumsPage

// 3. Tokiu pačiu principu, kaip ir vartotojų bei įrašų puslapiams, sukurti puslapį albumams (albums). Prie kiekvieno albumo turi būti:
//   3.1. Parašytas jo pavadinimas.
//   3.2. Parašytas vartotojo, sukūrusio šį albumą, vardas.
//   3.3. Albume esančių nuotraukų skaičius.
//   3.4. Viena nuotrauka.
//   3.5. Šis elementas turi būti nuoroda.
