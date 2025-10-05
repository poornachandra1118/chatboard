import React from 'react'
import { createStore } from 'redux'
const intial_data={
    user_records:[]
}


const Redux_store = (state=intial_data,action) => {
  switch(action.type){
    case 'INSERT':
        console.log('redux :',state.user_records)
        return {user_records:[...state.user_records,action.user_records]}
    default:
        return {...state}

  }
}

const store=createStore(Redux_store)

export default store
