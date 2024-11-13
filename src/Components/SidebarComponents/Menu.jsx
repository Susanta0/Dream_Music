import React from 'react'
// logo of menu data
import home from "../../assets/Vector.svg"
import trends from "../../assets/Vector (1).svg"
import library from "../../assets/Vector (2).svg"
import discover from "../../assets/Vector (3).svg"
// link tag from react router dom
import { Link } from 'react-router-dom'

// here is all data of menu data
const menuData= [
    {
        id:1,
        title:"Home",
        image:home,
        link:"/"
    },
    {
        id:2,
        title:"Trends",
        image:trends,
        link:"/trends"
    },
    {
        id:3,
        title:"Library",
        image:library,
        link:"/library"
    },
    {
        id:4,
        title:"Discover",
        image:discover,
        link:"/discover"
    }
]
const Menu = () => {
  return (
    <div className='pl-8 pt-10'>
        <p className='text-white'>MENU</p>

        <ul className=' space-y-4 pt-2'>
            {menuData.map((item)=> (
                <li key={item.id} className='flex items-center gap-4 w-36 p-2 rounded hover:bg-[#440101] li_bg'>
                    <img src={item.image} alt={item.title} />
                    <Link className='text-white menu-title' to={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Menu