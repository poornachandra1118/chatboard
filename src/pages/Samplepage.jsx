import React from 'react'

import { useState,useEffect,useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Samplepage = () => {

     const [messages, setMessages] = useState([
            { type: 'from', text: 'Hello 👋', time: '14:25' },
            { type: 'to', text: 'Hi there! 😊', time: '14:26' },
            { type: 'from', text: 'Hello 👋', time: '14:25' },
            { type: 'to', text: 'Hi there! 😊', time: '14:26' },
            { type: 'from', text: 'Hello 👋', time: '14:25' },
            { type: 'to', text: 'Hi there! 😊', time: '14:26' },
            { type: 'from', text: 'Hello 👋', time: '14:25' },
            { type: 'to', text: 'Hi there! 😊', time: '14:26' },
          ]);
      const messagesEndRef = useRef(null);
    
      // 👇 Auto-scroll when messages update
      useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [messages]);
  return (
    <div>

        <div className='row'>
        <div className='col-lg-3  col-md-3 col-sm-3 col-xs-3' >
                <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "100%"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
      <span class="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg> */}
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg> */}
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg> */}
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg> */}
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          {/* <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg> */}
          Customers
        </a>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
        </div>

        <div className='col-lg-9 col-md-9 col-sm-9 col-xsm-9'>
                 <div className="container mt-4">
      <div
        className="overflow-auto border rounded p-3"
        style={{ height: '300px', backgroundColor: '#f8f9fa' }}
      >
        <ul className="list-unstyled mb-0">
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`d-flex mb-2 ${
                msg.type === 'from' ? 'justify-content-start' : 'justify-content-end'
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.type === 'from' ? 'bg-light text-dark' : 'bg-primary text-white'
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
      
    </div>
  )
}

export default Samplepage
