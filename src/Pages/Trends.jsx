import React from 'react'
import { Link } from 'react-router-dom'

const Trends = () => {
  return (
    <div>
      <img className='m-auto h-46 w-40' src="https://maocmusic.netlify.app/static/media/Man_Construction_Worker.f68562f9.png" alt="" />
      <p className='text-yellow-400 text-5xl font-bold text-center mt-4'>Under Construction</p>
      <div className='text-center flex justify-center'>
    <Link className='text-green-800 text-1xl font-bold text-center mt-4 px-2 py-1 rounded-sm hover:bg-orange-400 hover:text-white' to="/">Go Home</Link>
    </div>
    </div>
    
  )
}

export default Trends