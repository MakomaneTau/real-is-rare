import React from 'react'
import Product from "@/app/shop/productcard";
import { Navbar } from '@/components/Navbar';
import { Footerbar } from '@/components/Footerbar';

export default function about() {
    return (
        <>
            <Navbar />
            <main>
                <h1>
                    Shop
                </h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-0">



                </div>
            </main>
            <Footerbar />


        </>
    )
}
