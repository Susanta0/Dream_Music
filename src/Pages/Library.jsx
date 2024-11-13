import React from 'react'
import { Link } from 'react-router-dom'

const Library = () => {
  return (
   
    <div>
      <img className='m-auto' src="https://maocmusic.netlify.app/static/media/female-singer_bowie.85797fa7.png" alt="" />
      <h1 className='text-yellow-400 text-5xl font-bold text-center mt-4'>Not Library Yet</h1>
      <div className='text-center flex justify-center'>
    <Link className='text-green-800 text-1xl font-bold text-center mt-4 px-2 py-1 rounded-sm hover:bg-orange-400 hover:text-white' to="/">Go Home</Link>
    </div>
    </div>
  )
}

export default Library