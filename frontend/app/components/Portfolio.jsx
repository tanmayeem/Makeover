import React from 'react'
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div className="p-10 px-10 md:px-20 ">
      <h2 className="p-1 pb-6 font-medium text-center text-[20px] md:text-[28px] ">Portfolio </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-7'>
      <div className="hover:border p-1 rounded-lg ">
        <Image
          src='/no1.jpg'
          alt="banner"
          width={350}
          height={30}   
          unoptimized
          className="rounded-t-lg md:h-[300px] object-cover"
        />
        <div className="flex justify-between items-center p-2 m-auto">
          <div>
            <h2 className="text-[14px] md:text-[20px] text-center font-bold hover:underline transition">
                hello 
            </h2>
            <h2 className="line-clamp-3 text-[13px] md:text-[13px] ">
                how are you
            </h2>
          </div>
        </div>
      </div>

      {/* // next image  */}

      <div className="hover:border p-1 rounded-lg ">
        <Image
          src='https://res.cloudinary.com/dalptk18r/image/upload/v1718309504/western.jpg'
          unoptimized
          alt="banner"
          width={400}
          height={350}
          className="rounded-t-lg md:h-[300px] object-cover"
        />
        <div className="flex justify-between items-center p-2 m-auto">
          <div className='flex'>
            <h2 className="text-[14px] md:text-[20px] text-center font-bold hover:underline transition">
                hello 
            </h2>
            <h2 className="line-clamp-3 text-[13px] md:text-[13px] ">
                how are you
            </h2>
          </div>
        </div>
      </div>


      <div className="hover:border p-1 rounded-lg ">
        <Image
          src='/no2.jpg'
          alt="banner"
          width={350}
          height={300}
          className="rounded-t-lg md:h-[300px] object-cover"
        />
        <div className="flex justify-between items-center p-2 m-auto">
          <div>
            <h2 className="text-[14px] md:text-[20px] text-center font-bold hover:underline transition">
                hello 
            </h2>
            <h2 className="line-clamp-3 text-[13px] md:text-[13px] ">
                how are you
            </h2>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
