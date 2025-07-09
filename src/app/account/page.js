'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import logo from '../../../public/logo.jpg';
import Image from 'next/image';

export default function Account() {
    const [isLoginMobile, setIsLoginMobile] = useState(true);

    return (
        <main className="w-screen min-h-screen bg-[#999999] flex flex-col items-center justify-center">
            {/* Logo */}
            <Link href="/">
                <Image
                    src={logo}
                    alt="Logo"
                    width={205}
                    height={55}
                    className="cursor-pointer md:mb-10"
                    priority
                />
            </Link>


            {/* ===== DESKTOP VIEW ===== */}
            <div className="hidden md:block w-[90%] max-w-5xl bg-[#D9D9D9] p-10 rounded-lg shadow-md text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-1">
                    {/* Sign In */}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                        <p className="mb-6">Enter your email and password to access your account</p>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 text-left" htmlFor="signin-email">Email</label>
                                <input
                                    type="email"
                                    id="signin-email"
                                    name="email"
                                    placeholder="Enter Email"
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-left" htmlFor="signin-password">Password</label>
                                <input
                                    type="password"
                                    id="signin-password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <button type="submit" className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
                                Sign In
                            </button>
                            <button className="btn relative w-full flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
                                <span className="w-full h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full translate-y-full ease-out duration-500 transition-all mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full flex items-center justify-center gap-2 text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                                    <FaGoogle />
                                    Sign In with Google
                                </span>
                            </button>
                        </form>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:inline-block h-[500px] w-0.5 bg-black mx-6"></div>

                    {/* Sign Up */}
                    <div className="flex-1">
                        <p className="mb-2">Welcome to Real is Rare Apparel, would you like to</p>
                        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 text-left" htmlFor="fullname">Full Name</label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    placeholder="Enter Full Name"
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-left" htmlFor="signup-email">Email</label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    name="email"
                                    placeholder="Enter Email"
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-left" htmlFor="signup-password">Password</label>
                                <input
                                    type="password"
                                    id="signup-password"
                                    name="password"
                                    placeholder="Enter Password"
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-left" htmlFor="repeat-password">Repeat Password</label>
                                <input
                                    type="password"
                                    id="repeat-password"
                                    name="repeat-password"
                                    placeholder="Repeat Password"
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </div>
                            <button type="submit" className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
                                Sign Up
                            </button>
                            <button className="btn relative w-full flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
                                <span className="w-full h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full translate-y-full ease-out duration-500 transition-all mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full flex items-center justify-center gap-2 text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                                    <FaGoogle />
                                    Sign Up with Google
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* ===== MOBILE VIEW ===== */}
            <div className="block md:hidden w-[90%] max-w-5xl h-[90%] m-10 bg-[#D9D9D9] p-10 rounded-lg shadow-md">
                <div className='flex justify-center items-center'>
                    <div className="flex-1">
                        {/* Mobile Login */}
                        <div className={`${isLoginMobile ? 'block' : 'hidden'}`} id="mobileLogin">
                            <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
                            <p className="mb-6">Enter your email and password to access your account</p>
                            <form className="space-y-4 mb-8">
                                <div>
                                    <label className="block mb-1 text-left" htmlFor="signin-email">Email</label>
                                    <input
                                        type="email"
                                        id="signin-email"
                                        name="email"
                                        placeholder="Enter Email"
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-left" htmlFor="signin-password">Password</label>
                                    <input
                                        type="password"
                                        id="signin-password"
                                        name="password"
                                        placeholder="Enter Password"
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <button type="submit" className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
                                    Sign In
                                </button>
                                <button className="btn relative w-full flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
                                    <span className="w-full h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full translate-y-full ease-out duration-500 transition-all mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full flex items-center justify-center gap-2 text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                                        <FaGoogle />
                                        Sign In with Google
                                    </span>
                                </button>
                            </form>
                            <span className='text-sm'>
                                Don't have an account?{' '}
                                <button className='text-indigo-600 underline cursor-pointer' onClick={() => setIsLoginMobile(false)}>
                                    Register
                                </button>
                            </span>
                        </div>

                        {/* Mobile Signup */}
                        <div className={`${isLoginMobile ? 'hidden' : 'block'}`} id="mobileSignUp">
                            <p className="mb-2">Welcome to Real is Rare Apparel, would you like to</p>
                            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                            <form className="space-y-4 mb-8">
                                <div>
                                    <label className="block mb-1 text-left" htmlFor="fullname">Full Name</label>
                                    <input
                                        type="text"
                                        id="fullname"
                                        name="fullname"
                                        placeholder="Enter Full Name"
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-left" htmlFor="signup-email">Email</label>
                                    <input
                                        type="email"
                                        id="signup-email"
                                        name="email"
                                        placeholder="Enter Email"
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-left" htmlFor="signup-password">Password</label>
                                    <input
                                        type="password"
                                        id="signup-password"
                                        name="password"
                                        placeholder="Enter Password"
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-left" htmlFor="repeat-password">Repeat Password</label>
                                    <input
                                        type="password"
                                        id="repeat-password"
                                        name="repeat-password"
                                        placeholder="Repeat Password"
                                        className="w-full px-3 py-2 border rounded"
                                    />
                                </div>
                                <button type="submit" className="w-full py-2 bg-black text-white rounded hover:bg-gray-800">
                                    Sign Up
                                </button>
                                <button className="btn relative w-full flex items-center justify-start overflow-hidden font-medium transition-all bg-indigo-100 rounded hover:bg-white group py-1.5 px-2.5">
                                    <span className="w-full h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full translate-y-full ease-out duration-500 transition-all mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full flex items-center justify-center gap-2 text-left text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
                                        <FaGoogle />
                                        Sign Up with Google
                                    </span>
                                </button>
                            </form>
                            <span className='text-sm'>
                                Have an account?{' '}
                                <button className='text-indigo-600 underline cursor-pointer' onClick={() => setIsLoginMobile(true)}>
                                    Log in
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
