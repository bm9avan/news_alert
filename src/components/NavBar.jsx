import React from 'react'
import './NavBar.css'

const NavBar = ({hideDesc, descHandler}) => {
  // const [hideDesc, setHideDesc] = useState(false)
  // when lifting state up should i use useState in parent? should i pass hideDesc as prop 
  return (
    <>
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
      <label className="switch">
        <label htmlFor="checker" className='checkerLable'>
          Description({hideDesc ? 'Showing' : 'Hidden'}):
        </label>
        <input type="checkbox" id='checker' onChange={(e) => { descHandler(e.target.checked) }} checked={hideDesc} />
        <span className="slider round"></span>
      </label>
    </>
  )
}

export default NavBar
