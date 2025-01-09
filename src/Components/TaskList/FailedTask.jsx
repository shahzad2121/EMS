import React from 'react'

const FailedTask = () => {
  return (
    <div className="bg-[#15616D] flex-shrink-0 rounded-md px-5 py-3 w-[23%]">
            <div className="flex items-center justify-between mb-8">
              <h5 className="bg-red-700 px-3 rounded-md py-1">{data.category}</h5>
              <h6>{data.date}</h6>
            </div>
            <div>
              <h2 className="mb-4 font-semibold text-3xl">
              {data.title}
              </h2>
              <p className="font-light text-lg leading-tight mb-3">
              {data.description}
              </p>
              <p className="font-light text-lg leading-tight mb-3">
              {data.description}
              </p>
              <div className='w-full flex py-2 justify-between items-center'>
              <button className='bg-red-700 px-2 py-1 w-[80%] rounded-md'>Failed</button>
              </div>
            </div>
          </div>
  )
}

export default FailedTask