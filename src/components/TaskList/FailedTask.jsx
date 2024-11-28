import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full p-5 w-[350px] bg-yellow-400 rounded-xl'>
    <div className='flex justify-between items-center'>
      <h3 className='bg-red-600 px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='test-sm'>{data.date}</h4>  
    </div>
    <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
    <p className='text-sm mt-2'>{data.description}</p>
    <div className='mt-5'>
        <button className='bg-red-500'>Failed</button>
    </div>
</div>
  )
}

export default FailedTask