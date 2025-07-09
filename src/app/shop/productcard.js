import React from "react";
import Image from "next/image";
import Link from "next/link";
import pic from "../shop/img66.jpg"

export const Productcard = ({product}) => {
    return (
        <>
            <div className=" rounded-lg shadow-md p-4 bg-[#efefef] hover:shadow-2xl/50 transition-shadow m-5">

                <Link href="/">
                    <div className="relative w-full h-60 md:h-70 sm:h-70">
                        <Image
                            src={pic}
                            alt={"Tshirt"}
                            fill
                            className="overflow-hidden rounded"
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="sm:text-xl md:text-xl font-semibold ">Premium Edition T-Shirt</h2>
                        <p className="text-gray-500 md:text-lg mt-2 sm:text-sm">R300.00</p>
                    </div>
                </Link>

            </div>

            <>{/*}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-0">
                <div className=" rounded-lg shadow-md p-4 bg-[#F2EBE2] hover:shadow-2xl/50 transition-shadow m-5">

                    <Link href="/">
                        <div className="relative w-full h-60 md:h-70 sm:h-70">
                            <Image
                                src={pic}
                                alt={"Tshirt"}
                                fill
                                className="overflow-hidden rounded"
                            />
                        </div>
                        <div className="mt-4">
                            <h2 className="sm:text-xl md:text-xl font-semibold ">Premium Edition T-Shirt</h2>
                            <p className="text-gray-500 md:text-lg mt-2 sm:text-sm">R300.00</p>
                        </div>
                    </Link>

                </div>
            </div>
               
            {*/}</>


        </>

    )
}
