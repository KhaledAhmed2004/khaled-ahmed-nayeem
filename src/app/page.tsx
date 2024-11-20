"use client";
import ContactMe from "@/components/modules/ContactMe";
import FeaturedProjects from "@/components/modules/FeaturedProjects";
import Footer from "@/components/modules/Footer";
import Hero from "@/components/modules/Hero";
import MySliked from "@/components/modules/MySliked";
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
    <div>
      <Navbar />
      <Hero />
      <MySliked />
      <FeaturedProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}
