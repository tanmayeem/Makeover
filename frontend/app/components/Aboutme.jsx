import React from "react";
import Image from "next/image";

export default function Aboutme() {
  return (
<div className=" p-2 bg-gray-50 ">
    <div className="fl">
<h2 className=" p-2 underline text-2xl flex text-black justify-center item-center">About me</h2>
    </div>
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h3>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <Image
        alt="hello"
        height={50}
        width={50}
        unoptimized
        src="/Photo 1990 (1).jpg"
        className="h-56 w-full p-5 px-10  object-cover sm:h-full "
        style={{ width: '100%', height: '90%' }}
      />
    </section>
    </div>
  );
}
