import React from 'react'
import { useParams } from 'react-router'
// import './chat.css'
import { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import Chatboard_data from './Chatboard_data'
// import User_details from './User_details'

const Dashboard = () => {

    const [chat_info,set_chatinfo]=useState({
        from_mobile:'',
        to_mobile:'',
        text:'',
    })

    


    const {Mobile}=useParams()
    const [user_data,set_userdetails]=useState({
        User_id:'',
        User_name:'',
        Mobile:'',
        Email:'',
        password:''
    })
    const data1=Chatboard_data()
    console.log('chat_registrations:',data1)
    const object_keys=Object.keys(data1)
    // console.log('chat_ids ',object_keys)
    // if (data1){
        
    // object_keys.forEach((value)=>{
    //     if(String(data1[value].Mobile[0]) === String(Mobile)){
    //         console.log('matching')
    //         set_userdetails({...user_details,'User_id':value,'User_name':data1[value].User[0],'Mobile':Mobile,'Email':data1[value].Email[0],'password':data1[value].password[0]})
    //     }
    // })
    
    // }

    // let [friends_details,set_friendsdetails]=useState([])

    let friends_details=[]

    

                useEffect(() => {
                if (data1 && Mobile) {
                object_keys.forEach((value,index) => {
                    if (String(data1[value].Mobile[0]) === String(Mobile)) {
                    // console.log('matching');
                    set_userdetails({
                        User_id: value,
                        User_name: data1[value].User[0],
                        Mobile: data1[value].Mobile[0],
                        Email: data1[value].Email[0],
                        password: data1[value].password[0]
                    });
                    }
                    else{
                        // console.log('friends list :',data1[value].User[0],index)
                    //    set_friendsdetails([...friends_details,{
                    //         User_id: value,
                    //         User_name: data1[value].User[0],
                    //         Mobile: data1[value].Mobile[0],
                    //         Email: data1[value].Email[0],
                    //         password: data1[value].password[0]
                    //         }])
                    // friends_details.push({
                    //         User_id: value,
                    //         User_name: data1[value].User[0],
                    //         Mobile: data1[value].Mobile[0],
                    //         Email: data1[value].Email[0],
                    //         password: data1[value].password[0]
                    //         })
                    }
                });
                // object_keys.forEach((value,index,) => {
                //         console.log('friends username:',data1[value].User[0],index)
                //         set_friendsdetails([...friends_details,{
                //             'User_id': value,
                //             'User_name': data1[value].User[0],
                //             'Mobile': data1[value].Mobile[0],
                //             'Email': data1[value].Email[0],
                //             'password': data1[value].password[0]
                //             }])
                // })
                }
            }, [data1, Mobile])


            for(let x of object_keys){
                if (String(data1[x].Mobile[0]) !=String(Mobile)){

               
                friends_details.push({
                            User_id: x,
                            User_name: data1[x].User[0],
                            Mobile: data1[x].Mobile[0],
                            Email: data1[x].Email[0],
                            password: data1[x].password[0]
                            })
            }
             }
    
            console.log('friends list :',friends_details)
    
        const [status,setstatus]=useState(false)

       
        
        const [select_frnd,set_frnd]=useState({
            status:'Notselected',
            frnd_id:'',
            frnd_name:'',
            frnd_mobile:'',
        })
        
      




        const messages=[]
         const messagesEndRef = useRef(null);

        //   { type: 'from', text: 'Hello 👋', time: '14:25' },
        //         { type: 'to', text: 'Hi there! 😊', time: '14:26' },
        //         { type: 'from', text: 'Hello 👋', time: '14:25' },
        //         { type: 'to', text: 'Hi there! 😊', time: '14:26' },
        //         { type: 'from', text: 'Hello 👋', time: '14:25' },
        //         { type: 'to', text: 'Hi there! 😊', time: '14:26' },
        //         { type: 'from', text: 'Hello 👋', time: '14:25' },
        //         { type: 'to', text: 'Hi there! 😊', time: '14:26' },
        
          // 👇 Auto-scroll when messages update
          useEffect(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
          }, [messages]);

           



        const [data,set_data]=useState([])
          const chat_change=(friend_id)=>{
                friends_details.filter((y)=>{
                    if (y.User_id === friend_id)
                        {
                        console.log('user :',y)
                        set_frnd({status:true,frnd_id:friend_id,frnd_name:y.User_name,frnd_mobile:y.Mobile})
                        set_chatinfo({...chat_info,'from_mobile':[user_data.Mobile],'to_mobile':[y.Mobile]})

                    }
                })
        
        axios.get('https://chatboard2225-default-rtdb.firebaseio.com/chatborad_chat.json').then(R1=>{
                // console.log(R1)
                console.log('update')
                set_data(R1.data)}
            
            )
            
        }
        console.log('message data :',data)
        const [intervels,setting_interval]=useState(false)
          const form_sumbit=(e)=>{
            e.preventDefault()
            axios.post('https://chatboard2225-default-rtdb.firebaseio.com/chatborad_chat.json',chat_info).then(()=>{
                console.log('message sended..')
            //   intervels?setting_interval(false):setting_interval(true)
                setting_interval(true)
                set_chatinfo({...chat_info,'text':' '})
            //    let input= document.querySelector('#message_input')
            //         input.value=' '
                chat_change(select_frnd.frnd_id)
                
            });
            // setstatus(true)
            
          }

          console.log('message sended :',data)

          
          const msg_keys=Object.keys(data)
          console.log(msg_keys)


           for(let x of msg_keys){
                if (((String(data[x].from_mobile[0]) === String(chat_info.from_mobile)) && (String(data[x].to_mobile[0]) === String(chat_info.to_mobile))) || ((String(data[x].from_mobile[0]) === String(chat_info.to_mobile)) && (String(data[x].to_mobile[0]) === String(chat_info.from_mobile)))  ){

                (String(data[x].from_mobile[0]) === String(chat_info.from_mobile)) ?
               messages.push(
                { type: 'from', text:data[x].text[0] , time: '' },
               ): messages.push(
                { type: 'to', text:data[x].text[0] , time: ''},
               )
            }
             }
            // let count=0

            //  useEffect(()=>{
            //     // if(count==9){
            //     //     clearInterval(interval)
                    
            //     // }
            //      setTimeout(()=>{
            //         clearInterval(interval)
            //     },10000)
            //     let interval=setInterval(()=>{
            //         // count+=1
            //         chat_change(select_frnd.frnd_id)
            //     },3000)
               
               

            //  },[intervels])

            // if(intervels){
            //      setTimeout(()=>{
            //         setting_interval(false)
            //         clearInterval(interval)
            //     },10000)
            //     let interval=setInterval(()=>{
            //         // count+=1
            //         chat_change(select_frnd.frnd_id)
            //     },3000)
            // }


            useEffect(()=>{
        chat_change(select_frnd.frnd_id)
        },[chat_info.text])
        



  return (
    <div className='mb-5'>

        {/* <h1>Dashboard</h1>
        <h1>{Mobile}</h1> */}

    <div className='row '>
        <div className='col-lg-3  col-md-3 col-sm-3 col-xs-3' >
                <div class="d-flex ms-2 flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "100%"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
      <span class="fs-4">{user_data.User_name} Chat Box </span>
    </a>
    <hr />
    
    <ul class="nav nav-pills flex-column mb-auto">
   
    {
        friends_details?
    friends_details.map((value,index)=>{
    return <li key={index} onClick={()=>{chat_change(value.User_id)}} class="nav-item mb-2">
        <span href="#" class="nav-link active" aria-current="page">
         
          {value.User_name}
          
        </span>
      </li>
    }):null}
     
      
    </ul>
    <hr />
    
  </div>
        </div>

        <div className='col-lg-9 col-md-9 col-sm-9 col-xsm-9'>
            <div className='bg-light text-dark mt-1 text-center'>
            <h3>{select_frnd.frnd_name}</h3>
            </div>
                 <div className="container mt-4">
      <div
        className="overflow-auto border rounded p-3"
        style={{ height: '400px', backgroundColor: '#f8f9fa' }}
      >
        <ul className="list-unstyled mb-0">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`d-flex mb-2 ${
                msg.type === 'from' ? 'justify-content-end' : 'justify-content-start'
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.type === 'from' ? 'bg-primary text-white' :  'bg-light text-dark'
                }`}
                style={{ maxWidth: '70%' }}
              >
                <div>{msg.text}</div>
                <small className="text-muted">{msg.time}</small>
              </div>
            </li>
          ))}
          <div ref={messagesEndRef} />
        </ul>
      </div>
    </div>

        </div>

        </div>

        <div className='row mt-3'>
        <div className='col-md-3'>
        </div>
        <div className='col-md-9'>
        <div className='row'>
        <div className='col-lg-12 text-center'>
            <form onSubmit={form_sumbit} >
        <div className='input-group '>
          <div class="form-floating">
  <textarea class="form-control"  name='text' onChange={(e)=>{set_chatinfo({...chat_info,[e.target.name]:[e.target.value]})}} placeholder="Leave a comment here" id="message_input floatingTextarea"></textarea>
  <label for="floatingTextarea">Message</label>
</div>
           <button className='btn btn-success'>send</button>
           </div>
           </form>
           </div>
           </div>
        </div>
        </div>


             <table className="table">
  <thead>
    <tr>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Text</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{chat_info.from_mobile}</th>
      <td>{chat_info.to_mobile}</td>
      <td>{chat_info.text}</td>
    
    </tr>
   
  </tbody>
</table>



    </div>
  )
}

export default Dashboard
