import React from 'react'
import Product from "@/app/shop/productcard";
import { Navbar } from '@/components/Navbar';
import { Footerbar } from '@/components/Footerbar';
import ViewProduct from './viewProduct';

export default function product() {
    return (
        <>
            <Navbar />
            <main>

                <ViewProduct />

                <div className='mt-10'>
                    <h1>

                    </h1>

                    {/*Add Cards here*/}
                </div>
                <div className='p-10'>
                    <h1 className='text-3xl flex justify-center items-center'>You would also like: </h1>
                    <hr className="h-px  mb-10 bg-gray-200 border-0 dark:bg-gray-700 bg-gradient-to-r from-[#ccc] via-[#333] to-[#ccc]" />

                    <div>
                        {/*Fill with product cards*/}
                    </div>

                </div>


            </main>
            <Footerbar />


        </>
    )
}
