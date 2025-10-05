import React, { useState } from 'react'

import { useNavigate ,Navigate } from 'react-router'

import axios from 'axios'
const Reg = () => {

    const [record,set_record]=useState({
        User:'',
        Mobile:'',
        Email:'',
        password:''
    })

    const nav=useNavigate()



        const submiting=(e)=>{
            e.preventDefault()
            console.log('submited');

           

            axios.post('https://chatboard2225-default-rtdb.firebaseio.com/chatborad_reg.json',record).then(()=>alert('Form is submited successfuly'));
            
            nav('/login')
            //  return <Navigate to={'/login'} />
        }




  return (
    <div>



        <div className='col-6 offset-3'>
            
                <form onSubmit={submiting}>
                    <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">user_name</label>
            <input type="text" name='User' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Mobile</label>
            <input type="text" name='Mobile' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='Email' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
           
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input name='Password' onChange={(e)=>{set_record({...record,[e.target.name]:[e.target.value]})}}  type="password" className="form-control" id="exampleInputPassword1" />
        </div>
       
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">User</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{record.User}</th>
      <td>{record.Email}</td>
      <td>{record.Mobile}</td>
      <td>{record.Password}</td>
    </tr>
   
  </tbody>
</table>

      
    </div>
  )
}

export default Reg
