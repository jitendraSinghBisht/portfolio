import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overscroll-y-contain snap-y snap-mandatory h-full w-full overflow-y-scroll">
      <Navbar className="top-6" />
      <div className="snap-center h-full w-full">
        <Hero />
      </div>
      <div className="snap-center h-full w-full">
        <Hero />
      </div>
      <div className="snap-center h-full w-full">
        <Hero />
      </div>
      <div className="snap-center h-full w-full">
        <Hero />
      </div>
      <div className="snap-center h-full w-full">
        <Hero />
      </div>
    </div>
  );
}
