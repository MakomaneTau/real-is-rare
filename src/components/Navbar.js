"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.jpg";
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
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { HiOutlineShoppingBag } from "react-icons/hi";




export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const overlayRef = useRef(null);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOverlay = () => {
    setShopOpen(!shopOpen);
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShopOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close when clicking outside the dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        shopOpen &&
        overlayRef.current &&
        !overlayRef.current.contains(e.target)
      ) {
        setShopOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [shopOpen]);

  return (
    <nav className="top-0 w-full h-30 shadow-xl bg-white z-50 sticky">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={205}
            height={55}
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="link-underline link-underline-black ml-10 uppercase text-xl">
              <Link href="/">home</Link>
            </li>

            <li className=" link-underline link-underline-black ml-10 ">
              <div onClick={handleOverlay} className="flex items-center gap-1 cursor-pointer">
                <span className="uppercase text-xl">shop</span>
                <ChevronDownIcon className="h-6 w-6 text-black" />
              </div>

              <div
                ref={overlayRef}
                className={`${shopOpen
                  ? "opacity-100 scale-100 top-30"
                  : "opacity-0 scale-95 top-[-100%]"
                  } 
              fixed left-0 w-full h-screen p-10 bg-black/90 backdrop-blur-sm 
              transition-all duration-700 ease-in-out transform z-40`}
              >
                <div className="grid grid-cols-3">

                  <div className="text-white">
                    <h1 className="mb-4 text-xl">Shop Tops</h1>
                    <ul className="text-l space-y-8">
                      <li>
                        <Link href="/shop"> Women's Hoodies</Link>
                      </li>
                      <li>
                        Men's Hoodies
                      </li>
                      <li>
                        Allow Yourself To Grow Edition
                      </li>
                      <li>
                        Rare Hearts Edition
                      </li>
                      <li>
                        Starlight Edition
                      </li>
                      <li>
                        Bomber Jackets
                      </li>
                      <li>
                        Sweater Weather
                      </li>
                      <li>
                        Premium Edition
                      </li>
                      <li>
                        Real Social Club Edition
                      </li>

                    </ul>
                  </div>
                  <div className="text-white ">
                    <h1 className="mb-4 text-xl">Shop Bottomwear</h1>
                    <ul className="space-y-4">
                      <li>
                        Cargo Pants
                      </li>
                      <li>
                        Cargo Shorts
                      </li>
                      <li>
                        Trackpants
                      </li>
                      <li>
                        Fleece Shorts
                      </li>
                    </ul>

                  </div>

                  <div>
                    <ul className="text-white space-y-4 text-lg">
                      <li>
                        <Link href="/shop/men" onClick={() => setShopOpen(false)}>Shop All</Link>
                      </li>
                      <li>
                        <Link href="/shop/men" onClick={() => setShopOpen(false)}>Men</Link>
                      </li>
                      <li>
                        <Link href="/shop/women" onClick={() => setShopOpen(false)}>Women</Link>
                      </li>
                      <li>
                        <Link href="/shop/accessories" onClick={() => setShopOpen(false)}>Accessories</Link>
                      </li>
                      <li>
                        <Link href="/shop/accessories" onClick={() => setShopOpen(false)}>Puzzle Tracksuit</Link>
                      </li>
                      <li>
                        <Link href="/shop/accessories" onClick={() => setShopOpen(false)}>Fleece Set</Link>
                      </li>
                      <li>
                        <Link href="/shop/accessories" onClick={() => setShopOpen(false)}></Link>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

            </li>
            <li className="link-underline link-underline-black ml-10 uppercase text-xl">
              <Link href="/cart">
                <HiOutlineShoppingBag className="h-6 w-6 text-black" />
              </Link>
            </li>
            <li className="link-underline link-underline-black ml-10 uppercase text-xl">
              <Link href="/account">
                <AiOutlineUser className="h-6 w-6 text-black" />
              </Link>
            </li>
          </ul>
        </div>

        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>

        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-40"
              : "fixed left-[-100%] h-screen top-0 p-10 ease-in-out duration-900 z-40"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>

          <div className="flex-col py-4">
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className="link-underline link-underline-black py-4 cursor-pointer"
              >
                <Link href="/">home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="link-underline link-underline-black py-4 cursor-pointer"
              >
                <Link href="/shop">shop</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="link-underline link-underline-black py-4 cursor-pointer"
              >
                <Link href="/cart">cart</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            <AiOutlineInstagram size={30} className="cursor-pointer" />
            <AiOutlineFacebook size={30} className="cursor-pointer" />
            <AiOutlineTwitter size={30} className="cursor-pointer" />
          </div>
        </div>


        {/* <ul className="hidden sm:flex">    Gonna use this later
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href} className="ml-10 text-xl uppercase">
                <Link
                  href={item.href}
                  className={`${
                    isActive
                      ? "text-black-500 border-b-3 border-black-500"
                      : "text-gray-800 link-underline link-underline-black"
                  } transition-all duration-200`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};
