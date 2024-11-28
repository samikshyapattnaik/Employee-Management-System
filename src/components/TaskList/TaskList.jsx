import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
   
    
  return (
    <div id='tasklist' className='h-[50%] overflow-auto flex items-center  w-full mt-10 gap-5 flex-nowrap'>
        {/* const data = [];
if (data) {
  data.map(item => console.log(item));
} */}

      {data.tasks.map((item ,idx)=>{
        if(item.active){
            return <AcceptTask key={idx} data={item}/>

        }
        if(item.newTask){
          return  <NewTask  key={idx} data={item}/>
        }
        if(item.completed){
            return <CompleteTask  key={idx} data={item}/>
        }
        if(item.failed){
            return <FailedTask key={idx} data={item}/>
        }
      })}

    </div>
    
  )
}

export default TaskList