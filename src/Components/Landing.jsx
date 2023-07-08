// eslint-disable-next-line no-unused-vars
import React from 'react'

const Landing = () => {
  return (
  <div className="flex items-center justify-center h-screen flex-col md:flex-row">
  <div className="w-1/2 md:w-1/2">
    <h1 className="md:text-5xl text-2xl font-bold text-center">
      Dont Waste Your Time 
    </h1>
    <h1 className="md:text-5xl text-2xl font-bold text-center">Apply <span className='text-red-500'>10X</span> Faster</h1>
    <p className="text-lg font-bold text-blue-500 text-center mt-4">1000 HR experts at one click</p>
    <div className="flex justify-center mt-8">
      <button className="bg-yellow-200 hover:bg-green-700 text-black py-6 px-6 rounded">
        Start Now
      </button>
    </div>
  </div>
  <div className="w-1/2 flex justify-end md:justify-end mt-8 md:mt-0">
    <img src="job.jpg" alt="jojo" className="max-w-full h-auto" />
  </div>
</div>
  )
}

export default Landing