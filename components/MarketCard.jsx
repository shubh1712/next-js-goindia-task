import React from 'react'
import img from "../components/pngs/bgimg.jpeg"
import Image from 'next/image';

function MarketCard({marketData}) {

    const{title , description} = marketData
    return ( 
    <div className='m-2 rounded-xl card w-full p-2  border-orange-500  border-2 '>
        <div>
            <Image src={img} alt="img" className='rounded-lg' /> 
        </div>
        <p className='font-bold	'>
            {title}
        </p>
        <hr />
        <p>
            {description}
        </p>
    </div>
  )
}

export default MarketCard