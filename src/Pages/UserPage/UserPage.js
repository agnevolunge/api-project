import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { Link, useParams } from 'react-router-dom'

const UserPage = () => {

    const { id } = useParams()

    const [user, setUser] = useState(null)

  
    useEffect(() => {
        async function fetchUser() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_embed=albums`)
            const userData = await res.json()

            setUser(userData)
        }
        fetchUser()
    }, [id])

    if (!user) {
        return (
          <Container>
            <h3>Loading...</h3>
          </Container>
        )
    }

    console.log(user)
    // console.log(user.name)
    // console.log(user.username)
    // console.log(user.address)
    // console.log(user.phone)
    // console.log(user.website)
    // console.log(user.company)

  return (
    <Container>
        <h2>{user.name}</h2>
        <div>
          <ul>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
            <li>
               Address:
                <a href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`} target="blank">
                    {user.address.street} str. {user.address.suite},{" "} {user.address.city},{user.address.zipcode}.
                </a>
            </li>

            <li>
               Phone number: <a href={`tel:${user.phone}`}>{user.phone}</a>
            </li>
            <li>
              Web page:{" "}
              <a href={user.website} target="blank"> {user.website}</a>
            </li>
            <li>Works at: {user.company.name}</li>
           </ul>
        </div>

        <div>
        <h3>Posts:</h3>
        {user.posts && (
          <ol>
            {user.posts.map((post) => (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
      
      <div>
        <h3>Albums:</h3>
        {user.albums && (
          <ol>
            {user.albums.map((album) => (
              <li key={album.id}>
                <Link to={`/albums/${album.id}`}>
                  {album.title}
                </Link>
              </li>
            ))}
          </ol>
        )}
      </div>
    </Container>
    
  )
}

export default UserPage

// 5. Sukurti naują puslapį use, kuriame bus atvaizduojama vartotojo informacija:
//   5.1. Pilnas vardas.
//   5.2. Vartotojo vardas / nick'as.
//   5.3. El. paštas.
//   5.4. Adresas, kuris turės gatvę, namo numerį, miestą, pašto kodą. Paspaudus ant adreso, pagal koordinates, turėtų atidaryti šios vietos Google Maps.
//   5.5. Telefono numeris.
//   5.6. Internetinio puslapio adresas.
//   5.7. Įmonės, kurioje dirba, pavadinimas.

// 6. Šiame puslapyje (use) turi būti atvaizduojama:
//   6.1. Visi vartotojo parašyti įrašai (posts). Kiekvienas post'as turi turėti nuorodą.
//   6.2. Visi vartotojo sukurti foto albumai. Kiekvienas albumas turės pavadinimą, kuris turi būti nuoroda.