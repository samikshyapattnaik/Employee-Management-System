import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const TaskContext = ({children}) => {

  const [ userData , setUserdata] = useState('')

  useEffect(() => {
    setLocalStorage() // call localStorage
    const {employees} = getLocalStorage()
    setUserdata(employees)
},[])

  return (
    <div>
      <AuthContext.Provider value={[userData.setUserdata]}>
      {children}
      </AuthContext.Provider> 
      </div>
  )
}

export default TaskContext