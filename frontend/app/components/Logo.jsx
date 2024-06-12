import React from "react";
import Image from "next/image";

export default function logo() {
  return (
    <section className="p-6 bg-white">
      <div className="container p-4 mx-auto text-center text-black">
        <h2 className="text-4xl font-bold">Brand We Use</h2>
      </div>
      <div className="container flex flex-wrap justify-center mx-auto text-gray-400 dark:text-gray-600">
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <Image
            src="/urbandecay.svg"
            height={110}
            width={180}
            alt="Urban Decay"
          ></Image>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <Image
            src="/clinque.svg"
            height={110}
            width={180}
            alt="Clinique"
          ></Image>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <Image
            src="/anastasia.svg"
            height={110}
            width={180}
            alt="Anastaisa"
          ></Image>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
          <Image
            src="/twofaced.svg"
            height={110}
            width={180}
            alt="Twofaced"
          ></Image>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image
            src="/Mac.svg"
            height={110}
            width={180}
            alt="M.A.C"
          ></Image>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image
            src="/kryolan.svg"
            height={110}
            width={180}
            alt="kryolan"
          ></Image>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image
            src="/huda beauty.svg"
            height={110}
            width={180}
            alt="kryolan"
          ></Image>
        </div>
        <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
        <Image
            src="/smashbox.svg"
            height={110}
            width={180}
            alt="smashbox"
          ></Image>
        </div>
      </div>
    </section>
  );
}
