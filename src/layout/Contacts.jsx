import React from 'react'
import logo from '../assets/img/pexels-cottonbro-studio-3993444.jpg'
import Form from '../components/Form'
export default function Contacts() {
  return (
    <main id='contact' className='max-w-[1240px] px-10  mt-10 '> 
      <h1 className="text-3xl pt-10 text-gray-700 text-center uppercase">contact</h1>
           <hr className="w-[80px] border-2 border-orange-400 m-auto"/>
           <p className='text-center text-[15px] lg:text-2xl pt-10'>We would love to hear from you!</p>
<section className='grid lg:grid-cols-2 mt-10 gap-5'>
    <div >
<img src={logo} alt=""  className='object-fit w-[500px] h-[500px] rounded-md '/>
    </div>
    <div className=''>
      
  <Form/>
    </div>
    
</section>
    </main>
  )
}
