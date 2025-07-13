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
import { IoExitOutline } from "react-icons/io5";
import { useAuthContext } from '@/app/firebase/AuthContext';
import { logout } from '@/app/firebase/auth';
import { useRouter } from 'next/navigation';
import { useCart } from "@/app/firebase/cartContext";
import { HiOutlineArrowRight } from 'react-icons/hi';
import { HiOutlineArrowLeft } from 'react-icons/hi';

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const overlayRef = useRef(null);
  const { user, loading } = useAuthContext();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleOverlay = () => {
    setShopOpen(!shopOpen);
  };

  const { cartCount } = useCart();

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
          <ul className="hidden sm:flex justify-center items-center">
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
                  {/* Shop Tops */}
                  <div className="text-white">
                    <h1 className="mb-4 text-xl">Shop Tops</h1>
                    <ul className="text-l space-y-8">
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Women's Hoodies" } }} onClick={() => setShopOpen(false)}>
                          Women&apos;s Hoodies
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Men's Hoodies" } }} onClick={() => setShopOpen(false)}>
                          Men&apos;s Hoodies
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Allow Yourself To Grow Edition" } }} onClick={() => setShopOpen(false)}>
                          Allow Yourself To Grow Edition
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Rare Hearts Edition" } }} onClick={() => setShopOpen(false)}>
                          Rare Hearts Edition
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Starlight Edition" } }} onClick={() => setShopOpen(false)}>
                          Starlight Edition
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Bomber Jackets" } }} onClick={() => setShopOpen(false)}>
                          Bomber Jackets
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Sweater Weather" } }} onClick={() => setShopOpen(false)}>
                          Sweater Weather
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Premium Edition" } }} onClick={() => setShopOpen(false)}>
                          Premium Edition
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Real Social Club Edition" } }} onClick={() => setShopOpen(false)}>
                          Real Social Club Edition
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Shop Bottomwear */}
                  <div className="text-white">
                    <h1 className="mb-4 text-xl">Shop Bottomwear</h1>
                    <ul className="space-y-4">
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Cargo Pants" } }} onClick={() => setShopOpen(false)}>
                          Cargo Pants
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Cargo Shorts" } }} onClick={() => setShopOpen(false)}>
                          Cargo Shorts
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Trackpants" } }} onClick={() => setShopOpen(false)}>
                          Trackpants
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Fleece Shorts" } }} onClick={() => setShopOpen(false)}>
                          Fleece Shorts
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* General Categories */}
                  <div>
                    <ul className="text-white space-y-4 text-lg">
                      <li>
                        <Link href={{ pathname: "/shop" }} onClick={() => setShopOpen(false)}>
                          Shop All
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Men" } }} onClick={() => setShopOpen(false)}>
                          Men
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Women" } }} onClick={() => setShopOpen(false)}>
                          Women
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Accessories" } }} onClick={() => setShopOpen(false)}>
                          Accessories
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Puzzle Tracksuit" } }} onClick={() => setShopOpen(false)}>
                          Puzzle Tracksuit
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/shop", query: { category: "Fleece Set" } }} onClick={() => setShopOpen(false)}>
                          Fleece Set
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>

            </li>
            <li className="link-underline link-underline-black ml-10 uppercase text-xl">
              <Link href="/cart">
                <div className="relative">
                  <HiOutlineShoppingBag className="h-6 w-6 text-black" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white rounded-full px-2 text-xs">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </li>
            <li className="link-underline link-underline-black ml-10 uppercase text-2xl">

              {loading ? (
                <span>Loading...</span>
              ) : user ? (
                <button
                  className="flex justify-center items-center"
                  onClick={handleLogout}
                  title={`Log out ${user.fullName || user.email}`} // <--- Hover text
                >
                  <span className="mr-2">{user.fullName}</span>

                  <IoExitOutline className="w-10 h-8" />
                </button>


              ) : (
                <Link href="/account">
                  <AiOutlineUser className="h-6 w-6 text-black" />
                </Link>
              )}
            </li>
          </ul>
        </div>
        <ul className="sm:hidden cursor-pointer">
          <button>
            <Link href="/cart">
              <div className="relative">
                <HiOutlineShoppingBag className="h-6 w-6 text-black" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white rounded-full px-2 text-xs">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </button>
          <button onClick={handleNav} className="pl-6">
            <AiOutlineMenu size={25} />
          </button>

        </ul>


        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-40"
              : "fixed left-[-100%] h-screen top-0 p-10 ease-in-out duration-900 z-40"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div>
              {loading ? (
                <span>Loading...</span>
              ) : user ? (
                <span
                  className="flex justify-center items-center text-lg"
                  title={`Log out ${user.fullName || user.email}`} // <--- Hover text
                >
                  <span className="mr-2">Welcome {user.fullName}</span>
                </span>


              ) : (
                <Link href="/account">
                  <AiOutlineUser className="h-6 w-6 text-black" />
                </Link>
              )}

            </div>
            <div onClick={handleNav} className="cursor-pointer ">
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
              <li className="link-underline link-underline-black py-4 cursor-pointer">
                <button onClick={handleMobileMenu} className="flex items-center justify-between w-full">
                  <span>shop</span>
                  {mobileMenuOpen ? (
                    <HiOutlineArrowLeft className="ml-2 mt-1" />
                  ) : (
                    <HiOutlineArrowRight className="ml-2 mt-1" />
                  )}
                </button>

                {mobileMenuOpen && (
                  <ul className="mt-4 ml-4 space-y-3 text-sm text-gray-700">
                    <li>
                      <Link href={{ pathname: "/shop" }} onClick={handleNav}>
                        Shop All
                      </Link>
                    </li>
                    <li>
                      <Link href={{ pathname: "/shop", query: { category: "Women's Hoodies" } }} onClick={handleNav}>
                        Women
                      </Link>
                    </li>
                    <li>
                      <Link href={{ pathname: "/shop", query: { category: "Men's Hoodies" } }} onClick={handleNav}>
                        Men
                      </Link>
                    </li>
                    <li>
                      <Link href={{ pathname: "/shop", query: { category: "Cargo Pants" } }} onClick={handleNav}>
                        Winter Collection
                      </Link>
                    </li>
                    <li>
                      <Link href={{ pathname: "/shop", query: { category: "Trackpants" } }} onClick={handleNav}>
                        Summer Collection
                      </Link>
                    </li>
                    <li>
                      <Link href={{ pathname: "/shop", query: { category: "Accessories" } }} onClick={handleNav}>
                        Accessories
                      </Link>
                    </li>

                  </ul>
                )}
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

          <div className="absolute bottom-10 right-[10%] flex justify-end items-center">
            {loading ? (
              <span>Loading...</span>
            ) : user ? (
              <button

                onClick={handleLogout}
                title={`Log out ${user.fullName || user.email}`} // <--- Hover text
              >

                <IoExitOutline className="w-10 h-8" />
              </button>


            ) : (
              <Link href="/account">
                <AiOutlineUser className="h-6 w-6 text-black" />
              </Link>
            )}

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
