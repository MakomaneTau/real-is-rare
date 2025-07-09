'use client';

import React from 'react';
import Product from "@/app/shop/productcard";
import { Navbar } from '@/components/Navbar';
import { Footerbar } from '@/components/Footerbar';
import Image from 'next/image';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Cart() {
  // Placeholder values
  const quantity = 1;
  const price = 299.99;
  const total = quantity * price;

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-20 mt-10">
        <h1 className="text-3xl font-semibold mb-4">Cart</h1>
        <hr className="h-px mb-10 bg-gradient-to-r from-[#333] via-[#ccc] to-[#ccc] border-0" />

        {/* Cart Items */}
        <div className="mb-10">

          {/* Desktop Layout */}
          <div className='max-sm:hidden'>
            <table className="min-w-full border">
              <thead>
                <tr className="text-left">
                  <th className="p-2">Remove</th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Size</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-center align-middle">
                    <AiOutlineCloseCircle className="mx-auto text-xl text-red-500 cursor-pointer" />
                  </td>

                  <td className="p-2 max-w-40">
                    <div className="flex items-start gap-4 max-w-[300px]">
                      <Image
                        src="/assets/img_1.jpg"
                        width={50}
                        height={50}
                        alt="Product image"
                        className="object-cover rounded shrink-0"
                      />
                      <h2 className="text-sm font-medium whitespace-normal break-words">
                        Black Real Social Club T-Shirt (XL)
                      </h2>
                    </div>
                  </td>
                  <td className='p-2'>
                    Small
                  </td>
                  <td className='p-2'>
                    <label>R</label> <span>{price.toFixed(2)}</span>
                  </td>
                  <td className='p-2'>
                    <div className="flex items-center">
                      <button
                        aria-label="Decrease quantity"
                        className="w-4 h-4 flex justify-center items-center border"
                      >
                        <HiMinus />
                      </button>
                      <span className="w-4 h-4 flex justify-center items-center mx-4">
                        {quantity}
                      </span>
                      <button
                        aria-label="Increase quantity"
                        className="w-4 h-4 flex justify-center items-center border"
                      >
                        <HiPlus />
                      </button>
                    </div>
                  </td>
                  <td className='p-2'>
                    <label>R</label> <span>{(price * quantity).toFixed(2)}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile layout */}
          <div className="grid grid-cols-2 gap-4 sm:hidden mb-6">
            {/* Product Image */}
            <div className="ml-[25%]">
              <Image
                src="/assets/img_1.jpg"
                width={100}
                height={100}
                alt="Product image"
                className="object-cover rounded"
              />
            </div>

            {/* Product Details */}
            <div>
              <h2 className="text-lg font-medium mb-3">
                Black Real Social Club T-Shirt (XL)
              </h2>

              {/* Quantity Controls */}
              <div className="flex items-center mb-4">
                <button
                  aria-label="Decrease quantity"
                  className="w-8 h-8 flex justify-center items-center border"
                >
                  <HiMinus />
                </button>
                <span className="w-8 h-8 flex justify-center items-center mx-4 border">
                  {quantity}
                </span>
                <button
                  aria-label="Increase quantity"
                  className="w-8 h-8 flex justify-center items-center border"
                >
                  <HiPlus />
                </button>
              </div>

              {/* Price */}
              <div className="text-lg font-semibold">
                R<span>{price.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <hr className="h-px mb-10 bg-gradient-to-r from-[#999999] via-[#999999] to-[#999999] border-0" />

          {/* Total Summary & Checkout */}
          <div className="w-full max-w-lg mx-auto border p-5">
            {/* Total */}
            <div className="flex justify-between text-xl font-medium mb-5">
              <span className="ml-5">Total:</span>
              <div className="mr-5">
                R<span>{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-center items-center text-lg">
              <button className="btn flex items-center justify-center w-[90%] h-[56px] border border-black bg-black text-white hover:opacity-90 transition">
                Check Out
                <HiOutlineShoppingCart className="ml-2 text-xl" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footerbar />
    </>
  );
}
