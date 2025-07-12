// app/product/page.js
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footerbar } from "@/components/Footerbar";
import ProductClient from "./ProductClient";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div className="p-10">Loading product...</div>}>
          <ProductClient />
        </Suspense>
        <Footerbar />
      </main>
    </>
  );
}
