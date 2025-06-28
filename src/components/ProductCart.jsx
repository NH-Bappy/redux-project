import React from 'react'
import { Link } from 'react-router';
import { TiShoppingCart } from "react-icons/ti";
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';









const ProductCart = (props) => {

    const carts = useSelector(store => store.cart.items)
    console.log(carts)


    const {id , name , price , image , description , slug} = props.data;


    const dispatch = useDispatch();
    const handleAddToCartd = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1,
        }));
    }







  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
        <img src={image} alt="" className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]'/>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        </Link>
        <div className="flex justify-between items-center">
            <p>
                <span className='text-2xl font-medium'>{price}{'$'}</span>
            </p>
            <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex items-center gap-2' onClick={handleAddToCartd}>
                <TiShoppingCart className='text-sm'/>
                Add to Card
            </button>
        </div>
        
    </div>
  )
}

export default ProductCart