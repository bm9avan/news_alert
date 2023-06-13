import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <ul className='topnav'>
      <li><a href="/">Home</a></li>
      <li><a href="/trend">Trending News</a></li>
      <li>
        <form action="search" method="get" >
        <input type="text" name="s" id="search" />
        <input type="submit" value="search" />
        </form>
      </li>
    </ul>
  )
}

export default NavBar
