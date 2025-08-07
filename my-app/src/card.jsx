import React from 'react'

const Card = (props) => {
  return (
    <div className='hover:bg-slate-400 transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180 h-[240px]  w-full  rounded-2xl bg-gray-200 flex flex-col justify-between p-4'>
      <div className='font-medium text-gray-600'>{props.name}</div>
      <div className='text-xl font-medium'>{props.title}</div>
    </div>
  )
}

export default Card
