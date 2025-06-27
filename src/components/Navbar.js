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
    <nav className="fixed w-full h-24 shadow-xl bg-white z-50">
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

            <li className=" link-underline link-underline-black ml-10 uppercase text-xl">
              <div onClick={handleOverlay} className="flex items-center gap-1 cursor-pointer">
                <span>shop</span>
                <ChevronDownIcon className="h-6 w-6 text-black" />
              </div>

              <div
                ref={overlayRef}
                className={`${shopOpen
                  ? "opacity-100 scale-100 top-24"
                  : "opacity-0 scale-95 top-[-100%]"
                  } 
              fixed left-0 w-full h-screen p-10 bg-black/90 backdrop-blur-sm 
              transition-all duration-700 ease-in-out transform z-40`}
              >
                <ul className="text-white space-y-4 text-lg">
                  <li>
                    <Link href="/shop/men" onClick={() => setShopOpen(false)}>Men</Link>
                  </li>
                  <li>
                    <Link href="/shop/women" onClick={() => setShopOpen(false)}>Women</Link>
                  </li>
                  <li>
                    <Link href="/shop/accessories" onClick={() => setShopOpen(false)}>Accessories</Link>
                  </li>
                </ul>
              </div>

            </li>
            <li className="link-underline link-underline-black ml-10 uppercase text-xl">
              <Link href="/cart">
                <HiOutlineShoppingBag className="h-6 w-6 text-black" />
              </Link>
            </li>
            <li className="link-underline link-underline-black ml-10 uppercase text-xl">
              <Link href="/cart">
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
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
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
