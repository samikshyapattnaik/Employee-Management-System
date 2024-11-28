import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Alltask from '../other/Alltask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-7'>
        <Header changeUser={props.changeUser}/>
        <CreateTask />
        <Alltask />
       
    </div>
  )
}

export default AdminDashboard