import Link from 'next/link'
import React from 'react'
import {BsCartPlus} from 'react-icons/bs'
const CartIcon = () => {
  return (
    <Link href="/cart" className='flex items-center gap-4'>
        <div className='relative w-8 h-8 md:w-5 md:h-5 '>
          <BsCartPlus/>
        </div>
        <span> Cart(3)</span>
    </Link>
  )
}

export default CartIcon