'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Productcard = ({ product }) => {
  return (
    <div className="group w-full sm:w-[48%] md:w-[31%] lg:w-[23%] bg-[#efefef] rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 m-2">
      <Link href={{ pathname: "/product", query: { id: product.id } }}>
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded">
          {/* Default Image */}
          <Image
            src={product.images[0]}
            alt={`${product.name} front`}
            fill
            className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Hover Image */}
          <Image
            src={product.images[1]}
            alt={`${product.name} back`}
            fill
            className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">R{product.price}</p>
        </div>
      </Link>
    </div>
  );
};

