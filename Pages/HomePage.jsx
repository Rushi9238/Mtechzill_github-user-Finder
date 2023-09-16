import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const {userName,setUserName,userFound,setUserFound}=useContext(ThemeContext)
    const navigate=useNavigate()
  return (
   <>
   <div className=''>
    <div className='container mx-auto'>
        <div className='inputBox'>
        <input  className=' ' value={userName} type="text" placeholder='Enter GitHub username'
        onChange={(e)=>setUserName(e.target.value)}
        />
        <button className=''
        onClick={()=>{
           if(userName!==''){
            setUserName(userName)
            setUserFound(true)
            navigate(`/${userName}`)
           }
        }}
        >Search</button>
        </div>
    </div>
    
   </div>
   </>
  )
}

export default HomePage