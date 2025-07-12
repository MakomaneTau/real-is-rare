// src/app/shop/page.js
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Footerbar } from "@/components/Footerbar";
import ShopClient from "./ShopClient";

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Suspense fallback={<div className="p-10">Loading catalogue...</div>}>
          <ShopClient />
        </Suspense>
      </main>
      <Footerbar />
    </>
  );
}
