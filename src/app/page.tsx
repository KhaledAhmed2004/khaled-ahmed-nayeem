import FeaturedProjects from "@/components/modules/FeaturedProjects";
import Hero from "@/components/modules/Hero";
import Navbar from "@/components/modules/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
