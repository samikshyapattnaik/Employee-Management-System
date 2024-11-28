import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[350px] p-5 bg-sky-400 rounded-xl'>
    <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='test-sm'>{data.date}</h4>
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='mt-5'>
        <button className='bg-green-500 py-1 px-5 text-sm'>Complete</button>
    </div>
</div>
  )
}

export default CompleteTask