import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { togglePlantDetails } from '../slices/plantsSlice';
import PlantDetails from './PlantDetails';
import { useState } from 'react';
import AllPlants from './AllPlants';
function Plants() {

    const [viewAllPlants, setViewAllPlants] = useState(false);

    const plantsItems = useSelector((state) => state.plants);
    const dispatch = useDispatch();

    const handleToggleDetails = (index) => {
        
        dispatch(togglePlantDetails(index));
        
    };
    const toggleAllPlants = ()=>{
        setViewAllPlants( (prev) => !prev )
    }
    return (
        <>
            <div className='m-16'>

                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-3xl font-semibold'>Plants</h2>
                        <p className='text-sm text-gray-500'>Press to learn More about our plants</p>
                    </div>
                    <button onClick={toggleAllPlants} className=''>{viewAllPlants ? "View Less" :"View More"}<i></i></button>
                </div>
                <div id='plants' className='grid grid-cols-3 mt-6 gap-12'>
                    {plantsItems && plantsItems.slice(0,3).map((item, index) => (
                        <div key={index} className='rounded-lg flex flex-col gap-1 text-left'>
                            <img className='rounded-lg max-w-lg' src={item.imageUrl} alt={item.name}/>
                            {item.isViewed && (<PlantDetails plant={item}/>)}
                            <button onClick={() => handleToggleDetails(index)}>{item.name}{item.isViewed ? ' ^ ' : ' V ' }</button>
                        </div>
                    ))}
                </div>
                {viewAllPlants && <AllPlants />}
                
                
            </div>
        </>
    )
}

export default Plants