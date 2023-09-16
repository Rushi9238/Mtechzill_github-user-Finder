import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate=useNavigate()
  return (
    <>
    <h1 className='text-2xl text-center mt-5 text-white'>Page Not Found Please <span onClick={()=>navigate('/')} className='underline cursor-pointer'>Go To Home</span></h1>
    </>
  )
}

export default PageNotFound