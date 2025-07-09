"use client";
import {Productcard} from "@/app/shop/productcard";
import { Footerbar } from "@/components/Footerbar";
import { Navbar } from "../components/Navbar";
import Image from "next/image";
import Index from "./index/Index"

export default function Home() {
  return (
    <>
    <Navbar/>

    <main>
      <Index/>
    </main>

    
    <Footerbar/>
    </>
  );
}