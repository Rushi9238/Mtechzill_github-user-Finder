import React from 'react'
import './App.css'
import HomePage from '../Pages/HomePage'
import { ThemeProvider } from '../Context/ThemeContext'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import { Route, Routes } from 'react-router-dom'
import MyProfile from '../Pages/MyProfile'
import PageNotFound from '../Pages/PageNotFound'
import Usercard from '../Pages/Usercard'

function App() {

  return (
    <>
      <div className='box-border p-0 m-0 relative h-screen parent'>
        <ThemeProvider>
          <Header />
          <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/myprofile' element={<MyProfile/>}/>
          <Route path='/:name' element={<Usercard/>}/>
          <Route path='/404' element={<PageNotFound/>}/>

          </Routes>
          <Footer />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
