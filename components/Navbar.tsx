'use client'
import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.svg'
import Search from './Search'
import NavMenus from './NavMenus'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className='flex justify-between items-center sticky top-0 z-10 h-20 px-20 shadow-sm bg-gray-100'>
      <div onClick={()=>router.push('/')} className='flex cursor-pointer items-center gap-x-1'>
        <Image  src={logo} alt='logo' width={20} />
        <h3 className='font-semibold'>msn</h3>
      </div>
      <div className=''>
        <Search />
      </div>
      <div>
        <NavMenus/>
      </div>
    </nav>
  )
}

export default Navbar
