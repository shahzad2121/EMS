import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="bg-[#78290F] flex-shrink-0 rounded-md px-5 py-3 w-[23%]">
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
              <div className='w-full flex py-2 justify-between items-center'>
              <button className='bg-green-700 px-2 py-1 rounded-md w-[70%]'>Completed</button>
              <button className='bg-green-700 px-2 py-1 rounded-md w-[70%]'>Completed</button>
              </div>
            </div>
          </div>
  )
}

export default CompleteTask