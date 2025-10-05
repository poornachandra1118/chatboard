import React from 'react'

import { BrowserRouter,Route,Routes } from 'react-router'

import Dashboard from './Dashboard'
import Login from './Login'
import Reg from './Reg'
import Navbar from './Navbar'

const Index = () => {
  return (
    <div>

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/Dashboard/:Mobile' element={<Dashboard/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/' element={<Reg/>} />
                
            </Routes>
        </BrowserRouter>



      
    </div>
  )
}

export default Index
