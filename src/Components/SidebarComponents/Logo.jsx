import React from 'react'
// music player website logo
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
    

    <div className='flex justify-center'>
        <img src={logo} alt="logo" />
    </div>
    </Link>
  )
}

export default Logo