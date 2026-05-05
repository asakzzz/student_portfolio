"use client";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import Header from "../header";
import { JetBrains_Mono } from "next/font/google";


const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={jetbrains.className}>
      <Header />
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel/>

      </div>
    </main>
  );
}