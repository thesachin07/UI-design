import React from 'react'

const Card = (props) => {
  return (
    <div className='hover:bg-slate-400  transform-style-preserve-3d transition-transform duration-500 group-hover:rotate-y-180 h-[240px] w-[250px] rounded-2xl bg-gray-200 flex flex-col justify-between ml-2 mr-2'>
        <div className=' m-8 font-medium text-gray-600'>{props.name}</div>
        <div className=' m-4 text-xl font-medium'>{props.title}</div>
        {/* <div className=' m-4 text-xl font-medium'>{props.description}</div> */}
    </div>
  )
}

export default Card