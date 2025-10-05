import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Chatboard_data = () => {
     const [data,set_data]=useState([])
    
       useEffect(()=>{axios.get('https://chatboard2225-default-rtdb.firebaseio.com/chatborad_reg.json').then(R1=>{
            // console.log(R1)
            set_data(R1.data)
            // set_data([...data,{'user':'chandra'}])s
        })},[]) 
            // console.log(data)
        
    
  return data
}

export default Chatboard_data
