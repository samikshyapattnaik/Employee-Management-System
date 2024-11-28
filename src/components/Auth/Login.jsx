import React , {useState}from 'react'

const Login = ({handelLogin}) => {
   
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  //two ways binding
  //form submitted
const SubmitHandeler=(e) => {
  e.preventDefault()
  handelLogin(email,password) 
  // console.log("email is " ,email);
  // console.log("password is " ,password);
  
setEmail('')
setPassword('')
}


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-2xl border-emerald-600 p-20 px-8 py-15 '>
           <form 
           onSubmit={(e)=>
            {SubmitHandeler(e)}}
           className='flex flex-col items-center justify-center'> 
            <input
            value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
            required 
            className='text-white outline-none border-2 bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-xl  placeholder:text-gray-400' type="email"
            placeholder='Enter Your email' />

            <input
            value={password}
             onChange={(e)=>{setPassword(e.target.value)}}
             required
              className='text-white outline-none border-2 bg-transparent border-emerald-600 mt-4 text-xl py-3 px-5 rounded-xl  placeholder:text-gray-400 ' type="Password"
            placeholder='Enter your password' />
            <button className=' text-white border-2 outline-none  bg-emerald-600 hover:bg-emerald-700 font-semibold mt-6 text-lg py-3 px-5 rounded-xl w-full'>Login</button>
            </form> 
        </div>
    </div>
  )
}

export default Login