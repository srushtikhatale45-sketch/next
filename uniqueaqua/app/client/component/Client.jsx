"use client";
import Link from "next/link";
import Image from "next/image";
import {
  aryans,
  chateau,
  enzym,
  garware,
  genrxhealthcare,
  jindal,
  mylan,
  parle,
  princeware,
  samconsult,
  smartsolution,
  yorkwinery,
} from "../../../assets";

function Client() {
  return (
    <div className="mt-20 pt-20">
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={enzym}
          alt="enzymimage"
        />

        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={jindal}
          alt="jindalimage"
        />

        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={princeware}
          alt="princeware"
        />

        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={yorkwinery}
          alt="yorkwinery"
        />

        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={genrxhealthcare}
          alt="genrxhealthcare"
        />

        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={smartsolution}
          alt="smartsolution"
        />
        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={garware}
          alt="garware"
        />
        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={aryans}
          alt="aryans"
        />
        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={mylan}
          alt="mylan"
        />
        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={parle}
          alt="parle"
        />
        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={samconsult}
          alt="samconsult"
        />
        <Image
          className="shadow-xl border border-gray-200 rounded-lg w-40 sm:w-44 md:w-48 lg:w-52 xl:w-56 h-auto object-contain p-4 bg-white hover:shadow-2xl transition-shadow duration-300"
          src={chateau}
          alt="chateau"
        />
      </div>
       <Link
              href="/client"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f97316] via-[#ea580c] to-[#fb923c] text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all group"
            >

            </Link>
    </div>
  );
}

export default Client;
