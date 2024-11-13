import React from 'react'
import { Link } from 'react-router-dom'

const Music = () => {
  return (
    <div>
      <img className='m-auto' src="https://maocmusic.netlify.app/static/media/multiple-musical-notes.d4a67532.png" alt="" />
      <h1 className='text-yellow-400 text-5xl font-bold text-center mt-4'>Not Music Yet</h1>
      <div className='text-center flex justify-center'>
    <Link className='text-green-800 text-1xl font-bold text-center mt-4 px-2 py-1 rounded-sm hover:bg-orange-400 hover:text-white' to="/">Go Home</Link>
    </div>
    </div>
  )
}

export default Music