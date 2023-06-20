import React, { useContext } from 'react'
import './NavBar.css'
import { Description } from '../store/desc-context'

const NavBar = () => {
  const ctx = useContext(Description)
  let { hideDesc, descHandler } = ctx
  return (
    <>
      <ul className='topnav'>
        <li><a href="/">Home</a></li>
        <li><a href="/in">Indian News</a></li>
        <li>
          <form action="search" method="get" >
            <input type="text" name="q" id="search" required />
            <input type="submit" value="search" />
          </form>
        </li>
      </ul>
      <div className="switch">
        <input type="checkbox" id="checker" onChange={(e) => { descHandler(e.target.checked) }} checked={hideDesc} />
        <label htmlFor="checker" className="slider round"></label>
        <label htmlFor="checker" className="checkerLabel">
          Description ({hideDesc ? 'Showing' : 'Hidden'})
        </label>
      </div>
    </>
  )
}

export default NavBar
