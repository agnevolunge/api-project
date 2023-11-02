import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { Link } from 'react-router-dom'
import { API_URL } from '../../config'

const UsersPage = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`${API_URL}/users?_embed=posts`)
      const usersData = await res.json()

      setUsers(usersData)
      console.log(usersData)
    }

    fetchUsers()
  }, [])

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/users?_embed=posts`)
  //     const usersData = await res.json()

  //     setUsers(usersData)
  //     console.log(usersData)
  //   }

  //   fetchUsers()
  // }, [])

  return (
    <Container>
      <h1>UsersPage</h1>
      <ul className='users-list'>
        
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/users/${user.id}`} className='user-link'>{user.name}</Link>
            ({user.posts.length} posts)
          </li>
        ))}
      </ul>
    </Container>
    
  )
}

export default UsersPage

// 1. Sukurti vartotojų puslapį (users), kuriame būtų atvaizduotas vartotojų sąrašas.
//   1.1. Prie vartotojo turėtu būti jo vardas.
//   1.2. Paspaudus ant vartotojo - nukreipiama į jo user puslapį.
//   1.3. Prie vartotojo vardo turėtų būti parašytų post'ų skaičius.