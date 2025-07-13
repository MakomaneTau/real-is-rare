// app/product/ProductClient.js
'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import ViewProduct from "@/app/product/viewProduct";

export default function ProductClient() {
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

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <>
      {product ? (
        <ViewProduct product={product} />
      ) : (
        <div className="p-10">Loading product...</div>
      )}
    </>
  );
}
