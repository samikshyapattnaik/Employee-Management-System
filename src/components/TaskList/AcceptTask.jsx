import React from 'react'

const AcceptTask = ({data}) => {
 
  console.log();
  
  return (
   
    <div className=' flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='test-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>
         { data.description}</p>
        <div className='flex justify-between mt-6'>
            <button className='bg-green-400 py-1 px-5 text-sm'>Mark as completed</button>
            <button className='bg-red-700 py-1 px-5 text-sm'>Mark as Failed</button>
        </div>
</div>

  )
}

export default AcceptTask