import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact_page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="first image"
            height="300"
            width="300"
            unoptimized
            src="https://res.cloudinary.com/dalptk18r/image/upload/v1718006900/putymik4cvr4balyccuw.jpg"
            className="absolute inset-0 h-full w-full object-cover "
          />
        </aside>

        <main className=" bg-slate-200 flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">            
          <div className="max-w-xl lg:max-w-3xl">
            <a href="/"> 
              <Image
              height={90}
              width={150}
              alt="Logo"
              unoptimized
              src="/logo.svg"
               />
            </a>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
             Welcome to Tanmayi Makeover💄🪞 
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              solve your all Doughts
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                placeholder="Enter First Name"
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                placeholder="Enter Last Name"
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm p-2"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Query{" "}
                </label>

                <textarea
                placeholder="Enter your Query "
                  type="text"
                  id="query"
                  name="query"
                  className="mt-1 w-full p-3 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm h-fit"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Submit  
                </button>
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                <FontAwesomeIcon icon="fa-solid fa-backward" />
                <a href="/">
                  Back  
                  </a>
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
