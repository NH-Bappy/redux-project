import React from 'react'
import { useSelector } from 'react-redux'

const CartTab = () => {
  const carts = useSelector(store => store.cart.items);






  return (
    <div className='fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px]'>
      <h2 className='p-5 text-white text-2xl'>Shopping Cart</h2>
      <div className=""></div>
      <div className="grid grid-cols-2">
        <button className='bg-black text-white'>CLOSE</button>
        <button className='bg-amber-600 text-white'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartTab