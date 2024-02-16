import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import Hero from "@/sections/Hero";
import WhatNews from "@/sections/WhatNews";
export default function Home() {
  
  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <Header />
      <Hero />
      <div className="relative">
      <About />
     
      <WhatNews />
      </div>
      <div className="relative">
      <Explore />
      <div className="gradient-02 z-0" />
      <Footer />
      </div>
    </div>
  );
}
