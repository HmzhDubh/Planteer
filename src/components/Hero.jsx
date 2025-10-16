import { useState } from 'react';
import cactus from '../assets/cactus.jpg';
import Plants from './Plants';
export default function Hero(){

    const [showHomePage, setShowHomePage] = useState(false);
    const handleGetStarted = () => {
        setShowHomePage( true )
    }
    return(
        <>
            <div className="bg-cover m-16 rounded-lg h-svh flex flex-col justify-center items-center" style={{backgroundImage: `url(${cactus})`}}>
                <div className='text-center py-48 w-full'>
                    <h1 className="text-6xl">Planteer</h1>
                    <h2 className="text-2xl">Plants Database for plants lovers</h2>
                    
                    <div className="flex flex-col gap-5 mt-6 mx-auto w-1/2 justify-center">

                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae placeat beatae nulla autem! Exercitationem laudantium suscipit fugiat quis. Distinctio corporis a suscipit, ipsum fugit autem eveniet harum et possimus rerum.</p>
                        <button onClick={handleGetStarted} className="rounded-md bg-black hover:bg-green-900 hover:text-black text-white px-3 py-2 text-sm font-medium">Get Started</button>
                    </div>
                </div>
            </div>
            {showHomePage && <Plants />}
        </>
        
    );
}