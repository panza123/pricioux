import React, { useEffect, useState } from "react";
import { data } from "../index";
export default function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    let intervalId = setInterval(() => {
      setSlide((prevslide) =>
        prevslide === data.length - 1 ? 0 : prevslide + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <main id="home" className="w-full h-[500px] flex ">
      {data.map((items, index) => (
        <div
          key={index}
          className="w-full h-full flex flex-shrink-0"
          style={{
            transform: `translateX(-${slide * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          
            <img
              src={items.img}
              alt=""
              className="w-full h-full object-cover"
            />
          
        </div>
      ))}
    </main>
  );
}
