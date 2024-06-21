import { HeroHighlight } from "@/components/ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";

export default function Hero() {
  return (
    <HeroHighlight className="w-full m-5 mt-26">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-[95%] mx-auto w-full">
        <div className="text-7xl col-span-3 text-white p-5 w-full">
          <div>
            Hello world,
            <br />
            This website is
            <FlipWords words={["better", "new", "beautiful", "modern"]} />
          </div>
        </div>
        <div className="row-span-3 col-span-2">
            <WobbleCard className="z-40" containerClassName="absolute top-[70%] w-[40rem]">
              <Image
                className=""
                width={1000}
                height={500}
                src={"/profile.png"}
                alt="img here"
              />
            </WobbleCard>
        </div>
        <div className="text-white col-span-3 text-xl pl-10 pr-[30%] h-28">
          If you need to use a one-off grid row value that doesn’t make sense to
          include in your theme, use square brackets to generate a property on
          the fly using any arbitrary value.
        </div>
        <div className="h-28 col-span-2 gap-10 flex ml-10 text-center items-center">
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
              Projects
            </div>
          </button>
          <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
              Resume
            </div>
          </button>
        </div>
      </div>
    </HeroHighlight>
  );
}
