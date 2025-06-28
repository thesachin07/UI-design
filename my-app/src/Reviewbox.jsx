import React from 'react'

const Reviewbox = (props) => {
  return (
    <div className='hover:bg-slate-400  transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180 h-[220px] w-[260px] rounded-2xl bg-gray-200 flex flex-col justify-between ml-2 mr-2'>
        <div className=' m-8  text-right font-light text-gray-600'>{props.name}</div>
        <div>
        <div className=' mx-4 my-0 text-3xl font-medium'>{props.title}</div>
        <div className=' m-4 mt-0 text-xl font-normal'>{props.description}</div>
        </div>
    </div>
  )
}

export default Reviewbox