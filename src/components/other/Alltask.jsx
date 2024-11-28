// import React, { useContext } from 'react'
// import  {AuthContext}  from '../../context/TaskContext'

// const Alltask = () => {

//     const authData = useContext(AuthContext)
//     if (!userData) { return <div>Loading...</div>;
//     }
//     return (
//     <div className='bg-black p-5 rounded mt-5'>
//         <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
//             <h3 className='text-lg font-medium w-1/5'>Employee Name</h3>
//             <h3 className='text-lg font-medium w-1/5'>New Task</h3>
//             <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
//             <h3 className='text-lg font-medium w-1/5'>completed</h3>
//             <h3 className='text-lg font-medium w-1/5'>Failed</h3>

//         </div>

//         <div className=''> 
//                 {authData.map((item,idx)(
//              <div key={idx}className='border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>   
//                 <h3 className='text-lg font-medium w-1/5'>{item.firstname}</h3>
//                 <h3 className='text-lg font-medium w-1/5 text-blue-400'>{item.taskNumbers.active}</h3>
//                 <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{item.taskNumbers.newTask}</h3>
//                 <h3 className='text-lg font-medium w-1/5 text-white'>{item.taskNumbers.completed}</h3>
//                 <h3 className='text-lg font-medium w-1/5 text-red-600'>{item.taskNumbers.failed}</h3>
//             </div>
//                 ))}
//         </div>
// </div>
//     )
    
// }

// export default Alltask

// components/Alltask.js
import React, { useContext } from 'react';
import { AuthContext } from '../../context/TaskContext';

const Alltask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-black p-5 rounded mt-5'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between'>
        <h3 className='text-lg font-medium w-1/5'>Employee Name</h3>
        <h3 className='text-lg font-medium w-1/5'>New Task</h3>
        <h3 className='text-lg font-medium w-1/5'>Active Task</h3>
        <h3 className='text-lg font-medium w-1/5'>Completed</h3>
        <h3 className='text-lg font-medium w-1/5'>Failed</h3>
      </div>

      <div>
        {userData.map((item, idx) => (
          <div key={idx} className='border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>   
            <h3 className='text-lg font-medium w-1/5'>{item.firstname}</h3>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{item.taskNumbers.active}</h3>
            <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{item.taskNumbers.newTask}</h3>
            <h3 className='text-lg font-medium w-1/5 text-white'>{item.taskNumbers.completed}</h3>
            <h3 className='text-lg font-medium w-1/5 text-red-600'>{item.taskNumbers.failed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alltask;
