import React from "react";
import logo from '../assets/img/pexels-polina-tankilevitch-3736523.jpg'

export default function About() {
  return (
    <>
<main id="about" className="max-w-[1440px]  lg:px-10">
      <h1 className="text-3xl pt-10 text-gray-700 text-center uppercase ">About us</h1>
      <hr className="w-[100px] border-2 border-orange-400 m-auto" />
      <section className="max-w-[1240px] grid lg:grid-cols-2 justify-between gap-10 px-10 mt-10">
        <div>
          <h2 className="text-2xl text-gray-500 font-bold ">Good Hair style </h2>
          <h2 className="text-2xl text-gray-500 font-bold ">Good Selfie</h2>
          <p className="text-[20px]">
            Running a salon successfully might not even seem very much
            managerial, but do not be fooled. Making up a winning salon simply
            means tying all the various aspects of luxury, style and beauty.
            Interior design is one of the factors that really encompass not just
            the layout of the salon but also the furniture of the salon as well.
          </p>
        </div>
        <div >
            <img src={logo} alt="" className=" w-[500px] h-[400px] object-cover rounded-md" />
        </div>
      </section>
    </main>

    </>
  );
}
