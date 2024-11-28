import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

// const [userName, setuserName] = useState('')

// if(!data){
//   setuserName('Admin')
// }else{
//   setuserName(data.firstname)
// }

const logoutUser = () =>{
  localStorage.setItem('loggedInUser','')
 props.changeUser('')
  
  // window.location.reload() // click Logout button page reloed
}
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='text-3xl font-semibold'>username</span>\</h1>
        <button onClick={logoutUser} className='bg-red-500 text-white font-medium px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header