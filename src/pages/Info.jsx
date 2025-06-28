import React , {useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './products';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cart';





const Info = () => {

  const { slug } = useParams();

  const [info , setInfo] = useState([]);

  const [quantity , setQuantity] = useState(1);

  const dispatch = useDispatch();


  useEffect(() => {
    const findInfo = products.filter(product => product.slug === slug);
    if(findInfo.length > 0){
      setInfo(findInfo[0]);
    }else{
      window.location.href = '/';
    }
  },[slug])


const handleMinusQuantity = () => {
  setQuantity(quantity -1 < 1 ? 1  :quantity -1);
}

const handlePlusQuantity = () => {
  setQuantity(quantity + 1)
}

const handleAddToCart = () => {
  dispatch(addToCart({
              productId: info.id,
              quantity: quantity
  }))
}










  return (
    <div>
      <h2 className='text-3xl text-center'>PRODUCT DETAIL</h2>
      <div className="grid grid-cols-2 gap-20 mt-5">
        <div>
          <img src={info.image} alt="" className='w-full'/>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className='text-4xl uppercase font-bold'>{info.name}</h1>
          <p className='font-bold text-3xl'>${info.price}</p>
          <div className="flex gap-5">
            <div className="flex gap-5 justify-center items-center">
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
              <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
              <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
            </div>
            <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl cursor-pointer' onClick={handleAddToCart}>
                Add To Cart
            </button>
          </div>
          <p className='text-base font-medium'>{info.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Info