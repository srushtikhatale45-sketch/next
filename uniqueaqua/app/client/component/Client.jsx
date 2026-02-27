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

      {/* Centered Button Container */}
      <div className="flex justify-center mt-12">
        <Link
          href="/client"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all group shadow-lg"
        >
          <span>View All Clients</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Client;
