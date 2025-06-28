import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router'
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

  const Header = () => {

  const [totalQuantity , setTotalQuantity] = useState(0);

  const carts = useSelector(store => store.cart.items);
    
  useEffect(() => {
      let total = 0;
      carts.forEach(item => total += item.quantity);
      setTotalQuantity(total)
  },[carts])
 

  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to={'/'} className='text-xl font-semibold'>Home.</Link>
      <div className="w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative">
          <FaCartShopping />  
          <span className='absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
      </div>
    </header>
  )
}

export default Header