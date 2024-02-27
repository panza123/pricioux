import React from 'react'
import { data2 } from '../index'
export default function Gallery() {
  return (
    <main id='gallery' className='max-w-[1440px] '>
          <h1 className="text-3xl pt-10 text-gray-700 text-center uppercase">Gallery</h1>
           <hr className="w-[80px] border-2 border-orange-400 m-auto"/>
           <div className='w-full h-full  grid lg:grid-cols-4 mt-10'>
        {data2.map((item,index)=>(
            <div key={index} className='w-full h-full cursor-pointer'>
            <img src={item.img} alt="" className='w-full h-[300px] object-cover' />
            </div>
        ))}
           </div>
    </main>
  )
}
