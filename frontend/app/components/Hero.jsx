import React from 'react'

export default function Hero() {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://res.cloudinary.com/dalptk18r/image/upload/v1717614815/tafilx3ckolmd16rq6mr.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Unleash Your Inner Radiance</h1>
      <p className="mb-5 text-white">From subtle enhancements to bold transformations, I love bringing out the beauty in everyone I work with. Let's create some magic together ! ✨💄</p> 
        <a href="https://www.instagram.com/makeoversbytanmayi/" target='blank'>
      <button className=" btn btn-primary">
        Get Started
        </button>
        </a>
    </div>
  </div>
</div>
  )
}
