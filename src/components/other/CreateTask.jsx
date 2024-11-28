import React, { useState , useContext} from 'react'
import { AuthContext } from '../../context/TaskContext'

const CreateTask = () => {
  const [userData,setUserdata] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [Catagory, setCatagory] = useState('')
   
  const [newTask, setNewTask] = useState({})
  
  const submitHandler =(e) =>{
    e.preventDefault()
    
    setNewTask({taskTitle,taskDescription,taskDate,Catagory,active:false,newTask:true,failed:false,completed:false});
   const data = userData
   // get data from localStorage

  data.forEach(function(elem){
    if(asignTo == elem.firstname){
      elem.tasks.push(newTask)
      // console.log(elem);
      elem.tasks.newTask = elem.tasks.newTask+1
      
    }    
   })
   setUserdata(data)
        console.log(data);//data set to local storage
  
   setTaskTitle('')
   setCatagory('')
   setAsignTo('')
   setTaskDate('')
   setTaskDescription('')
  }

 
  return (
    <div>
         <div className='p-5 bg-[#1C1C1C] mt-7 h-58 rounded'>
            <form  onSubmit={(e)=>{
              submitHandler(e);
            }} className='flex w-full flex-wrap items-start justify-between'>
                <div className='w-1/2 '>
              <div>
                 <h3 className='test-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input
                 value={taskTitle}
                 onChange={(e)=>{
                  setTaskTitle(e.target.value);
                 }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
              </div>
                <div>
                <h3  className='test-sm text-gray-300 mb-0.5'>Date</h3>
                <input
                value={taskDate}
                onChange={(e)=>{
                 setTaskDate(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'type="date" />
                </div>
                <div>
                <h3  className='test-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input
                value={asignTo}
                onChange={(e)=>{
                 setAsignTo(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                </div>
                <div>
                <h3  className='test-sm text-gray-300 mb-0.5'>Catagory</h3>
                <input 
                value={Catagory}
                onChange={(e)=>{
                 setCatagory(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev,etc' />
                </div>  
                </div>
                <div className='w-2/5 flex-col items-start'>
                <h3  className='test-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value={taskDescription}
                onChange={(e)=>{
                 setTaskDescription(e.target.value);
                }}
                className='w-full h-44 text-sm py-2 px-4rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea><br />
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateTask