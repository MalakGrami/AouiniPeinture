import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";

import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
export const metadata: Metadata = {
  title: "Aouini Peinture",
  description: "Aouini Peinture - L'art de transformer vos espaces",
  
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Feature />
      
      
      
      <Testimonial />
      
      <Contact />
      <Blog />
    </main>
  );
}
