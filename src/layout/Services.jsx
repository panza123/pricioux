import React from "react";
import { service } from "../index";
export default function Services() {
  return (
    <main id="service" className="max-w-[1440px]  text-center">
          <h1 className="text-3xl pt-10 text-gray-700">OUR SERVICES</h1>
           <hr className="w-[120px] border-2 border-orange-400 m-auto"/>
          <div className="w-full h-ful px-10 grid justify-items-center lg:grid-cols-4 ">
      {service.map((services, index) => (
        
        <div key={index} className="w-full h-full flex flex-col justify-center items-center mt-10 px-2  ">
            
          <div className="w-full h-full">
            <img
              src={services.img}
              alt=""
              className="w-full h-[250px] object-cover rounded-t-md"
            />
            <div className="w-full cursor-pointer h-[100px] mt-2 bg-orange-500/75 hover:bg-orange-400 
            text-center pt-10 rounded-b-md font-bold text-[20px] text-slate-300 hover:text-white">
              <p>{services.text}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </main>
  );
}
