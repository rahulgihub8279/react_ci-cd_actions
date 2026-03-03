import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "../ui/button";
import { DollarSign, Heart, Plane } from "lucide-react";
import { PiHeartStraightThin } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-linear-to-br from-indigo-200 to-blue-100 flexCenter py-22">
      {""}
      <div className="relative z-10 max-w-4xl lg:max-w-5xl mx-auto px-4 text-center items-center justify-center flex flex-col">
        {""}
        <div className="mt-3 inline-flex items-center space-x-2 bg-white/60 px-6 py-2 border border-zinc-100 shadow-sm rounded-full">
          <span className="relative flex h-3 w-3 ">
            <span className="absolute inline-flex h-full w-full rounded-full animate-ping bg-indigo-900 opacity-80"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-indigo-600 "></span>
          </span>
          <span className="text-sm font-medium text-indigo-950 pl-1">
            Al-Powered Travel Agent
          </span>
        </div>
        {""}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mt-3 mb-6 tracking-tight leading-tight text-indigo-950">
          Design Your Dream Getaway in Seconds
        </h1>
        {""}
        <p className="sm:text-xl md:text-2xl max-w-3xl   text-zinc-600 mb-8">
          Tell us where you want to go, and let our advanced Al craft the
          perfect itinerary tailored to your budget and interests.
        </p>
        {""}
        <Button
          className={
            "group px-10! py-7! mb-3 transition-all duration-300 text-md cursor-pointer hover:scale-105 active:scale-95 shadow-md"
          }
        >
          Start Planning{" "}
          <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-300"></FaArrowRightLong>
        </Button>
        {""}
        <div className="mt-8 grid grid-cols-3 gap-x-20 text-sm text-zinc-500">
          <div className="flex flex-col items-center gap-2  ">
            <div className="p-4 bg-white rounded-xl text-indigo-950">
              <Plane className="" size={24}></Plane>
            </div>
            <span>Smart Routes</span>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <div className="p-4 bg-white rounded-xl text-indigo-950">
              <DollarSign className="" size={24}></DollarSign>
            </div>
            <span>Budget Control</span>
          </div>
          <div className="flex flex-col items-center gap-2  ">
            <div className="p-4 bg-white rounded-xl text-indigo-950">
              <Heart className="" size={24}></Heart>
            </div>
            <span>Personalized</span>
          </div>
        </div>
      </div>
    </section>
  );
}
