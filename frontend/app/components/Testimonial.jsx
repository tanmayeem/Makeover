import React from 'react'
import Image from 'next/image'
export default function Testimonial() {
  return (

<div class="bg-white dark:bg-gray-800 w-full mx-auto p-8">
    <Image src="/icons/rocket.svg" height={120} width={120} alt='helo' class="w-10 h-10 m-auto mb-8"/>
    <p class="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
        <span class="font-bold text-indigo-500">
            “
        </span>
        To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
        <span class="font-bold text-indigo-500">
            ”
        </span>
    </p>
    <div class="flex items-center justify-center mt-8">
        <a href="#" class="relative block">
            {/* <Image alt="profil" src="/images/person/1.jpg" class="mx-auto object-cover rounded-full h-10 w-10 "/> */}
        </a>
        <div class="flex items-center justify-center ml-2">
            <span class="mr-2 text-lg text-indigo-500">
                Jean Miguel
            </span>
            <span class="text-xl font-light text-gray-400">
                /
            </span>
            <span class="ml-2 text-gray-400 text-md">
                User of Tail-Kit
            </span>
        </div>
    </div>
</div>

  )
}