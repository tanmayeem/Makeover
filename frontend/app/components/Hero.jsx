import React from 'react'

export default function Hero() {
  return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://res.cloudinary.com/dalptk18r/image/upload/v1717614815/tafilx3ckolmd16rq6mr.jpg)'}}>
  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
      <p className="mb-5 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary ">Get Started</button>
    </div>
  </div>
</div>
  )
}
