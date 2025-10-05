import React from 'react'

import { useState,useEffect } from 'react'

import { useNavigate } from 'react-router'
import axios from 'axios'

import Chatboard_data from './Chatboard_data'

const Login = () => {

     const [record,set_record]=useState({
            
            Mobile:'',
           passcode:'',
          
        })

    
        const data=Chatboard_data()

    console.log('data :',data)

    // console.log(data['-Oaioj940AEX1N8On2c6'].Mobile[0])
    const object_keys=Object.keys(data)
    console.log(object_keys)
    
    const nav=useNavigate()
    
  
         const submiting=(e)=>{
            e.preventDefault()
            console.log('submited');
        object_keys.forEach((value)=>{
            if((String(data[value].Mobile[0]) === String(record.Mobile )) && (String('2225')=== String(record.passcode)) ){
                        alert('login successfully done !')
                        nav('/Dashboard'+'/'+record.Mobile)
            }
        })
           

            // axios.post('https://chatboard2225-default-rtdb.firebaseio.com/chatborad_reg.json',record).then(()=>alert('Form is submited successfuly'));

            
            
        }

  return (
    <div>

            {/* {
                data.map((x)=><h1>{x.User}</h1>)
            } */}


            <div className='col-6 offset-3'>
            
                <form onSubmit={submiting}>
                    {/* <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">user_name</label>
            <input type="text" name='User' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           
        </div> */}
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Mobile</label>
            <input type="text" name='Mobile' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           
        </div>
           <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Passcode</label>
            <input type="text" name='passcode' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           
        </div>
        {/* <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='Email' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input name='Password' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}}  type="password" className="form-control" id="exampleInputPassword1" />
        </div> */}
       
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>

        <table className="table">
  <thead>
    <tr>
     
      <th scope="col">Mobile</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{record.Mobile}</td>
      
    </tr>
   
  </tbody>
</table>


        
      
    </div>
  )
}

export default Login
