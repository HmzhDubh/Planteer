import React from 'react'

function PlantDetails(props) {
  return (
    <div>
        <h3 className='text-md'>{props.plant.name}</h3>
        <p className='text-md text-gray-500'>{props.plant.brief}</p>
        <h3 className='text-md'>{props.plant.type}</h3>
    </div>
  )
}

export default PlantDetails