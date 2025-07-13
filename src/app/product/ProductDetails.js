import Image from 'next/image';
import React, { useState } from 'react';
import { HiPlus } from 'react-icons/hi';
import { addToCart } from '../firebase/cartUtility';

export default function ProductDetails({ product, productId }) {
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || "s");

  return (
    <main className='grid md:grid-cols-2 p-10'>
      {/* Image Thumbnails */}
      <div className='flex flex-col justify-center items-center'>
        <div>
          <Image
            alt="Selected"
            src={selectedImage}
            width={300}
            height={300}
            className="object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="grid grid-cols-2 mt-2 items-center justify-center gap-2">
          {product.images?.map((img, i) => (
            <label key={i} className={`cursor-pointer border-2 rounded-lg transition ${selectedImage === img ? "border-blue-500 ring-2 ring-blue-300 blur-[0.8px]" : "border-gray-300"}`}>
              <input
                type="radio"
                name="imageChoice"
                value={img}
                checked={selectedImage === img}
                onChange={() => setSelectedImage(img)}
                className="hidden"
              />
              <Image src={img} alt={`Preview ${i + 1}`} width={50} height={10} className="w-full h-10 object-cover" />
            </label>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className='m-auto'>
        <h1 className='text-xl md:text-3xl pt-10 md:pt-0'>{product.title}</h1>
        <p className='pt-5'>{product.description}</p>

        <h2 className='text-lg md:text-xl pt-5 pb-5 uppercase'>Select Size: {selectedSize.toUpperCase()}</h2>
        <div className="flex flex-wrap gap-4 mb-10 max-md:justify-center">
          {product.sizes?.map((size) => (
            <label key={size} className="flex items-center gap-2 md:mr-5">
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSize === size}
                onChange={(e) => setSelectedSize(e.target.value)}
                className='peer hidden'
              />
              <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center text-gray-600 peer-checked:bg-[#999999] peer-checked:text-white peer-checked:border-[#999999] transition-all cursor-pointer">
                {size.toUpperCase()}
              </div>
            </label>
          ))}
        </div>

        {/* Add to Cart */}
        <button onClick={() => addToCart(productId, product, selectedSize)}
          className="btn relative h-15 w-60 flex items-center justify-start overflow-hidden font-medium transition-all bg-black md:bg-[#999999] rounded hover:bg-white group py-1.5 px-2.5">
          <span className="w-full h-48 rounded bg-black absolute bottom-0 left-0 translate-x-full translate-y-full ease-out duration-500 transition-all mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full flex items-center justify-center gap-2 text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Add to Cart <HiPlus />
          </span>
        </button>
      </div>
    </main>
  );
}
