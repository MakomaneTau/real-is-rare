"use client";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footerbar } from "@/components/Footerbar";
import ViewProduct from "@/app/product/viewProduct";
import React, { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase/config";

export default function ProductPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      const docRef = doc(db, "catalogue", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Navbar />
      <main>
        {product ? (
          <ViewProduct product={product} />
        ) : (
          <div className="p-10">Loading product...</div>
        )}
        <Footerbar />
      </main>
    </>
  );
}
