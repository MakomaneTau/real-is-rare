import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import card from "../../public/Mastercard-logo.svg";
import paypal from "../../public/PayPal_Logo2014.svg";
import apple from "../../public/Apple_Pay-White-Logo.svg"
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineShoppingCart,
  AiOutlineUser
}
  from "react-icons/ai";

export const Footerbar = () => {
  return (
    <>
      <footer className='w-full bg-[#242124] text-gray- md:overflow-y-auto'>
        <div className='py-12 px-5 grid md:grid-cols-3 gap-8 text-gray-400 '>

          <div>
            <h3 className='mb-5 text-2xl'>
              Menu
            </h3>
            <ul>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Shop All
                </Link>

              </li>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  About us
                </Link>

              </li>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Return & Refund Policy
                </Link>

              </li>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Order & Delivery Information
                </Link>

              </li>
            </ul>
          </div>
          <div>
            <h2 className='mb-5 text-2xl'>
              Support
            </h2>

            <ul>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Return & Refund Policy
                </Link>

              </li>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Order & Delivery Information
                </Link>

              </li>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Contact us
                </Link>

              </li>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Terms & Conditions
                </Link>

              </li>
              <li className='mb-5'>
                <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125">
                  Privacy Policy
                </Link>

              </li>

            </ul>
          </div>

          <div className='grid gap-5'>
            <Link href="/" className='mx-auto md:ml-10'>
              <Image
                src={Logo}
                alt="Logo"
                width={205}
                height={55}
                className="cursor-pointer"
                priority
              />
            </Link>
            <div className="flex flex-row justify-around pt-10 items-center">
              <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125"><AiOutlineInstagram size={30} className="cursor-pointer" /></Link>
              <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125"><AiOutlineFacebook size={30} className="cursor-pointer" /></Link>
              <Link href="/" className="transform transition duration-1000 ease-in-out hover:text-white hover:scale-125"><AiOutlineTwitter size={30} className="cursor-pointer" /></Link>
            </div>
            <div className='flex flex-wrap justify-center gap-6 pt-6'>
              <Link href="/">
                <Image
                  src={card}
                  alt="Mastercard"
                  className="w-20 h-auto sm:w-24 object-contain"
                  priority
                />
              </Link>
              <Link href="/">
                <Image
                  src={paypal}
                  alt="PayPal"
                  className="w-20 h-auto sm:w-24 object-contain"
                  priority
                />
              </Link>
              <Link href="/">
                <Image
                  src={apple}
                  alt="Apple Pay"
                  className="w-20 h-auto sm:w-24 object-contain"
                  priority
                />
              </Link>
            </div>

          </div>
        </div>
        <div className="w-full bottom-0 bg-white text-gray-900 text-xs md:text-lg text-center py-4">
          &copy; 2025 Real Is Rare. <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a>
        </div>
      </footer>


    </>

  );
};
