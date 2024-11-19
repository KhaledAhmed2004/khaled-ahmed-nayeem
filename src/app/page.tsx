"use client";
import ContactMe from "@/components/modules/ContactMe";
import FeaturedProjects from "@/components/modules/FeaturedProjects";
import Hero from "@/components/modules/Hero";
import Navbar from "@/components/modules/Navbar";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div
    // className="scroll-smooth"
    >
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <ContactMe />
      <div className="h-[800px] bg-green-200">hi</div>
    </div>
  );
}
