import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {togglePlantDetails} from '../slices/plantsSlice'
import PlantDetails from './PlantDetails';
function AllPlants() {

    const plants = useSelector((state) => state.plants);
    const dispatch = useDispatch();
    const handleToggleDetails = (index) => {
            
        dispatch(togglePlantDetails(index));
            
    };

    return (
        <>
        
            <div id='all-Plants' className='grid grid-cols-3 mt-6 gap-12'>
                {plants && plants.slice(3).map((item, index) => (
                    <div key={index+3} className='rounded-lg flex flex-col text-left'>
                        
                        <img className='rounded-lg max-w-lg' src={item.imageUrl} alt={item.name}/>
                        {item.isViewed && <PlantDetails plant={item}/>}
                        <button onClick={() => handleToggleDetails(index+3)}>{item.name}{item.isViewed ? ' ^ ':' v '}</button>
                    </div>
                ))}
            </div>
        </>


    )
}

export default AllPlants