"use client";
import { Productcard } from "@/app/shop/productcard";
import { Footerbar } from "@/components/Footerbar";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Index from "./index/Index"
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <main>
        <Index />
      </main>


      <Footerbar />
    </>
  );
}