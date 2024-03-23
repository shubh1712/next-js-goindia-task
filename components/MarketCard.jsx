import React from 'react'
import img from "../components/pngs/market.png"
import Image from 'next/image';

function MarketCard({marketData}) {

    const{title , description} = marketData
    return ( 
    <div className='m-2 rounded-lg card w-full   border-orange-500  border-2 '>
        <div >
            <Image src={img} alt="img" className='rounded-lg' /> 
        </div>
        <p className='font-bold p-2	'>
            {title}
        </p>
        <hr />
        <p className="p-2">
            {description}
        </p>
    </div>
  )
}

export default MarketCard