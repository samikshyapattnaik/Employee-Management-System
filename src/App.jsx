import React, { useContext, useState ,useEffect} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/TaskContext'



const App = () => {
  
  const [user, setuser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)
  const [userData,setUserdata] = useContext(AuthContext)
//reload user
  useEffect(() =>{
      const loggedInuser = localStorage.getItem('loggedInUser')

      if(loggedInuser){
        const userData = JSON.parse(loggedInuser)
        setuser(userData.role)
        setloggedInUserData(userData.data) //
      
    }
  },[])

  const handleLogin = (email,password) =>{
  if(email == 'admin@me.com' && password == '123') {
    setuser('admin')
    localStorage.setItem('loggedInuser',JSON.stringify({role: 'admin'}))
    
  }else if(userData) {
    const employee =userData.find((e)=> email == e.email && e.password == password)
    if(employee){
    setuser('employee')
    setloggedInUserData(employee) 
    localStorage.setItem('loggedInuser',JSON.stringify({role: 'employee', data:employee}))  
  }}
  else{
    alert("Not valid");  
  }
}
  return (
   <>
   {!user ?<Login  handelLogin ={handleLogin} />:''} 
    {user == 'admin' ? <AdminDashboard changeUser={setuser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setuser} data ={loggedInUserData} />: null)}
   </>
  )
}

export default App