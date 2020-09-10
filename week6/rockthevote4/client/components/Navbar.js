import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/UserProvider'

function Navbar(props){
  const { logout } = props
  const {
      user: {
          username
      }
  } = useContext(UserContext)

  return (
    <div className="navbar">
      <Link to="/profile"><img src="https://img.icons8.com/android/24/000000/add-user-group-man-man.png" alt=""/></Link>
      <Link to="/global"><img src="https://img.icons8.com/android/24/000000/globe.png" alt=""/></Link>
      <h1>Welcome {username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar