"use client";

import Image from "next/image";
import Header from "./header";
import { JetBrains_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import { Geist } from "next/font/google";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import { Carousel } from "@/components/Carousel";
import Nav from "./nav";
import dynamic from "next/dynamic";
import ContactForm from "@/components/email-template";
const GitHubCal = dynamic( () => import ("@/components/GithubCalender").then((mod)=>mod.GitHubCal), {ssr:false});





const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="ml-3">
      <title>My portfolio</title>
      <Header />
      <ScrollReveal>
      <section id="Me" className="h-75">
        <div className=" sticky top-0">
          <div className=" flex flex-col mb-2 mt-15">
            <h1 className="font-extrabold font-[geist] text-3xl mb-3">ABOUT ME</h1>
            <div>
              <p className=" flex-1 text-2xl text-amber-50/90 font-[geist]">Who I am</p>
              <p className=" flex-2 font-[geist] text-amber-50/70 mr-2 mb-5 ml-3.5">I'm a first year student at <a className="text-amber-50 font-bold" href="https://www.epitech.eu/">EPITECH</a>. I love programming and technology overall.</p>
            </div>

            <div>
              <p className=" flex-1 text-2xl text-amber-50/90 font-[geist]">What I study</p>
              <p className=" flex-2 font-[geist] text-amber-50/70 mr-2 mb-5 ml-3.5">As a freshman, I study cybersecurity, AI (data analyzing, models) and Web development (frontend/backend) </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* talk about who I am and personality */}
      {/* talk about what I can do and what i've done in the past to prove my comp */}
      {/* add picture of myself */}
      <section className="h-full">
        <div className="sticky ">
          <div id="Work" className="font-extrabold font-[geist] text-3xl mb-3"><h1>MY WORK (give the carousel a try :) )</h1></div>
          <ScrollReveal>
          <Carousel />
          </ScrollReveal>
        </div>
      </section>


      <GitHubCal />



      {/* <ScrollReveal>
      <p id="Contact" className=" mt-20 font-extrabold font-[geist] text-3xl mb-3">CONTACTS</p>
      <div className="mt-5 mb-7 ml-3.5">
        <Nav />
      </div>
       </ScrollReveal>  */}
      <h1 className="font-extrabold font-[geist] text-3xl mb-3 mt-30">CONTACT ME DIRECTLY</h1>
       <ContactForm/>


    </main>

  );
}