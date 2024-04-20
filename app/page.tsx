'use client'
import Gaming from "@/components/Gaming";
import HeroSection from "@/components/HeroSection";
import Money from "@/components/Money";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Sports from "@/components/Sports";
import Travel from "@/components/Travel";
import Watch from "@/components/Watch";

export default function Home() {
  return (
    <div className="flex justify-center">
    <div className="bg-white w-[1600px] shadow-xl h-full ">
     <Navbar/>
     <HeroSection/> 
     <News/>
     <Watch/>
     <Sports/>
     <Money/>
     <Travel/>
     <Gaming/>
    </div>
    </div>
  )
}
