"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dummy from '@/app/index/dummy.jpg'

export default function Index() {

  const [page, setPage] = useState(1);

  useEffect(() => {
    let int = setInterval(() => {
      setPage(prev => ((prev + 1) >= 4 ? 1 : prev + 1));
    }, 5000);

    return () => clearInterval(int);
  }, []);


  const handlePrevPage = () => {
    setPage((prev) => (prev - 1 < 1 ? 3 : prev - 1));
  };

  const handleNextPage = () => {
    setPage((prev) => (prev + 1 > 3 ? 1 : prev + 1));
  };

  return (
    <main>

      <div
        className='hidden md:grid grid-cols-3 w-[100%]'
      >
        <div className="relative w-full h-300">
          <Image
            src="/assets/img_1.jpg"
            alt="Carousel"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-300">
          <Image
            src="/assets/img_2.jpg"
            alt="Carousel"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-300">
          <Image
            src="/assets/img_3.jpg"
            alt="Carousel"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/*Carousel i'll decide whether to make it desktop*/}
      {/*<div className='block md:hidden'>*/}
      <div className='md:hidden relative flex h-[calc(100vh-70px)] w-screen flex-col justify-center items-center'>

        <div className='w-full h-full'>
          <Image
            className='w-full h-full object-cover object-center'
            sizes='100vw'
            fill
            alt="Image 1"
            src={`https://dtzimw3pf8jogmpp.public.blob.vercel-storage.com/carousel/img_${page}.jpg`}
          />

        </div>

        <div className="absolute w-full flex justify-between items-center px-4 top-1/2 -translate-y-1/2 z-10"> {/*Come back and fix fro half screen touch */}
          {/* left arrow */}
          <div onClick={handlePrevPage} className="z-10 absolute left-0 text-2xl font-semibold h-200 w-[50%]">
            <button className="text-white inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer 🟪hover:text-violet-500 "></button>

          </div>

          {/* Right arrow */}
          <div onClick={handleNextPage} className="z-10 absolute right-0 text-2xl font-semibold h-200 w-[50%]">
            <button className="text-white inline-block transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer 🟪hover:text-violet-500 "></button>
          </div>
        </div>




      </div>


      <div className='p-10'>
        <h1 className='text-3xl flex justify-center items-center'>Featured Items</h1>
        <hr className="h-px  mb-10 bg-gray-200 border-0 dark:bg-gray-700 bg-gradient-to-r from-[#ccc] via-[#333] to-[#ccc]" />

        <div>
          {/*Fill with product cards*/}
        </div>

      </div>

      {/*Product*/}
      <div>
        <h1 className='text-3xl flex justify-center items-center'>Featured Item</h1>
        <hr className="h-px  mb-10 bg-gray-200 border-0 dark:bg-gray-700 bg-gradient-to-r from-[#ccc] via-[#333] to-[#ccc]" />


      </div>

      <div className='grid md:grid-cols-2 gap-0 w-[100'>
        <Image
          alt="Image"
          src={dummy}

          className='w-[100%]'
        />
        <Image
          alt="Image"
          src={dummy}
          className='w-[100%]'
        />
      </div>
    </main>
  )
}
