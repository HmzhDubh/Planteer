import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

function PlantDetails(props) {
  const cart = useSelector( state => state.cart )
  const dispatch = useDispatch()
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    console.log(cart)
    
  }
  return (
    <div className='flex flex-col p-2'>
        <h3 className='text-md'>{props.plant.name}</h3>
        
        <p className='text-md text-gray-500'>{props.plant.brief}</p>
        <h3 className='text-md'>{props.plant.type}</h3>
        <button onClick={() => handleAddToCart(props.plant)} className='bg-green-900 text-black rounded-md hover:bg-black hover:text-white'>Add To cart</button>
    </div>
  )
}

export default PlantDetails