import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <button className='m-4'>
        <Link to="/">Home</Link>
      </button>
      <button className='m-4'>
        <Link to="/userapp">UserApp</Link>
      </button>
      <button className='m-4'>
        <Link to="/userapptask">UserAppTask</Link>
      </button>
    </div>
  )
}

export default Menu
