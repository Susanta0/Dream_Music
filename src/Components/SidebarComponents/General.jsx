import React from 'react'
// general data logos
import setting from "../../assets/Settings.svg"
import logout from "../../assets/Log Out.svg"
// link tag from react router dom
import { Link } from 'react-router-dom'

// general data
const generalData=[
    {
        id:1,
        title:"Settings",
        image:setting
    },
    {
        id:2,
        title:"Log Out",
        image:logout
    }
]

const General = () => {
  return (
    <div className='pl-8'>
        <p className='text-white'>GENERAL</p>
        <ul className=' space-y-4 pt-3'>
            {generalData.map((item)=> (
                <li key={item.id} className='flex items-center gap-4 w-36 p-2 rounded hover:bg-[#440101] li_bg'>
                    <img src={item.image} alt={item.title} />
                    <Link className='text-white menu-title'>{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default General