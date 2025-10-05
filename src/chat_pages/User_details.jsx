import React, { useState } from 'react'
import Chatboard_data from './Chatboard_data'

const User_details = () => {
    //  const [user_details,set_userdetails]=useState({
    //         User_id:'',
    //         User_name:'',
    //         Mobile:'',
    //         Email:'',
    //         password:''
    //     })
    //     const data1=Chatboard_data()
    // console.log('chat_registrations:',data1)
    // const object_keys=Object.keys(data1)
    // console.log('chat_ids ',object_keys)
    // if (data1){
        
    // object_keys.forEach((value)=>{
    //     if(String(data1[value].Mobile[0]) === String(Mobile)){
    //         console.log('matching')
    //         set_userdetails({...user_details,'User_id':value,'User_name':data1[value].User[0],'Mobile':Mobile,'Email':data1[value].Email[0],'password':data1[value].password[0]})
    //     }
    // })
    
    
    // }
    // console.log('user id :',user_details)
    const [Mobile,setmobile]=useState('123456')
  return Mobile
}

export default User_details
