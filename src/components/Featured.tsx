import Image from "next/image";
import React from "react";
import { featureProducts } from "@/data";
const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-rose-500">
      {/* Wrapper */}
      <div className="w-max flex">
        {/* Single Item  */}
        {featureProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-center p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* Image container */}

            {item.img && (
              <div className="relative flex justify-center items-center w-full hover:scale-105
               transition-all duration-500">
                <Image src={item.img} alt="" width={300} height={300} className="object-contain" />
              </div>
            )}

            {/* Text Container */}
            <div className="flex flex-col items-center justify-center text-center gap-2 pt-5 ">
              <h1 className="text-xl font-bold uppercase xl:text-2xl lg:text-3xl "> {item.title} </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">{item.price}</span>
              <button className="bg-rose-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
