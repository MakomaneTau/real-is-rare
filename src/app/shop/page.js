'use client';
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { Productcard } from "./productcard";
import { Navbar } from "@/components/Navbar";
import { Footerbar } from "@/components/Footerbar";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "catalogue"));
      const allProducts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filtered = category
        ? allProducts.filter(p =>
        (p.name?.toLowerCase()?.includes(category.toLowerCase()) ||
          p.description?.toLowerCase()?.includes(category.toLowerCase()))
        )
        : allProducts;

      setProducts(filtered);
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">
          {category ? `Showing results for "${category}"` : "Real is Rare Catalogue"}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {products.map(product => (
            <Productcard key={product.id} product={product} />
          ))}
        </div>
      </main>
      <Footerbar />
    </>
  );
}
