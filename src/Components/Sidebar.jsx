import React from 'react'
import Logo from './SidebarComponents/Logo'
import Menu from './SidebarComponents/Menu'
import General from './SidebarComponents/General'

const Sidebar = () => {
  return (
    <div className='h-svh w-1/4 bg-[#0E0E0E] pt-4 flex flex-col justify-between rounded-s-[1em]'>
        <div>
        <Logo/>
        <Menu/>
        </div>
        <div className='pb-10'>
        <General/>
        </div>
    </div>
  )
}

export default Sidebar