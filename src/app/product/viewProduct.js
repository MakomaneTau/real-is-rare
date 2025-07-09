"use client";

import Image from 'next/image'
import React from 'react'
import { HiPlus } from 'react-icons/hi';
import { useState } from "react";

export default function viewProduct() {

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("s");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const [selected, setSelected] = useState("option1");
  const handleImageChange = (e) => {
    setSelectedColor(e.target.value);
  };



  const [selectedImage, setSelectedImage] = useState("/assets/img_1.jpg");

  const options = [
    { label: "Option 1", value: "/assets/img_1.jpg" },
    { label: "Option 2", value: "/assets/img_2.jpg" },
    { label: "Option 3", value: "/assets/img_3.jpg" },
  ];

  return (
    <main className='grid md:grid-cols-2 p-10'>


      <div>

        {/* Image Radio Options */}
        <div className="sm:absolute max-sm:mb-1 max-sm:items-center max-sm:justify-center flex gap-2">
          {options.map((opt) => (
            <label
              key={opt.value}
              className={`cursor-pointer w-[50] border-2 rounded-lg overflow-hidden transition ${selectedImage === opt.value
                  ? "border-blue-500 ring-2 ring-blue-300 blur-[0.8px]"
                  : "border-gray-300"
                }`}
            >
              <input
                type="radio"
                name="imageChoice"
                value={opt.value}
                checked={selectedImage === opt.value}
                onChange={() => setSelectedImage(opt.value)}
                className="hidden"
              />
              <Image
                src={opt.value}
                alt={opt.label}
                width={50}
                height={10}
                className="w-full h-10 object-cover"
              />

            </label>
          ))}
        </div>

        {/* Selected Image Display */}
        <div className="sm:ml-[30%] w-full">
          <Image
            alt="Selected"
            src={selectedImage}
            width={300}
            height={200}
            className="object-cover rounded-lg shadow-md"
          />
        </div>

      </div>

      {/*Details*/}
      <div>
        <h1 className='text-xl md:text-3xl pt-10 md:pt-0'>Real Is Rare Social Club T-Shirt</h1>
        <p className='pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque vel enim a elit viverra elementum.
          Nullam auctor, justo at sodales cursus, est turpis facilisis magna, id varius purus libero id magna.
          Donec nec nulla at ligula dapibus convallis.</p>

        <h2 className='text-lg md:text-xl pt-5 pb-5 uppercase'>Select Size: {selectedSize}</h2>

        <div className="flex gap-4 mb-10 max-md:justify-center">
          <label className="flex items-center gap-2 md:mr-5">
            <input
              type="radio"
              name="size"
              value="s"
              checked={selectedSize === "s"}
              onChange={handleSizeChange}
              className='peer hidden'
            />
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-gray-600 peer-checked:bg-[#999999] peer-checked:text-white peer-checked:border-[#999999] transition-all cursor-pointer">
              S
            </div>
          </label>

          <label className="flex items-center gap-2 md:mr-5">
            <input
              type="radio"
              name="size"
              value="m"
              checked={selectedSize === "m"}
              onChange={handleSizeChange}
              className='peer hidden'
            />
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-gray-600 peer-checked:bg-[#999999] peer-checked:text-white peer-checked:border-[#999999] transition-all cursor-pointer">
              M
            </div>
          </label>
          <label className="flex items-center gap-2 md:mr-5">
            <input
              type="radio"
              name="size"
              value="l"
              checked={selectedSize === "l"}
              onChange={handleSizeChange}
              className='peer hidden'
            />
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-gray-600 peer-checked:bg-[#999999] peer-checked:text-white peer-checked:border-[#999999] transition-all cursor-pointer">
              L
            </div>
          </label>
          <label className="flex items-center gap-2 md:mr-5">
            <input
              type="radio"
              name="size"
              value="xl"
              checked={selectedSize === "xl"}
              onChange={handleSizeChange}
              className='peer hidden'
            />
            <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-gray-600 peer-checked:bg-[#999999] peer-checked:text-white peer-checked:border-[#999999] transition-all cursor-pointer">
              XL
            </div>
          </label>

        </div>




        <button className="btn relative h-15 w-60 flex items-center justify-start overflow-hidden font-medium transition-all bg-black md:bg-[#999999] rounded hover:bg-white group py-1.5 px-2.5">
          <span className="w-full h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full translate-y-full ease-out duration-500 transition-all mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full flex items-center justify-center gap-2 text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Add to Cart<HiPlus />
          </span>
        </button>


      </div>


      <div>


      </div>
    </main>
  )
}
