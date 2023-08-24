import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=''h-12 text-rose-500 p-4 flex justify-between items-center border-b-2 border-b-rose-500 uppercase>
      {/* Logo */}
      <div className=''>
      <Link href="/">PithaShop </Link>
      </div>
      <div className=''>
      <Menu/>
      </div>
    </div>
  )
}

export default Navbar