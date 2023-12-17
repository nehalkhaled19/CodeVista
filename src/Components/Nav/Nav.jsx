import React from 'react'
import logo from '../../imgs/html-editor-app-logo.png'

export default function Nav() {
  return <>
  <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid">
    <a className='navbar-brand d-flex align-items-center m-auto justify-content-center' >
        <img src={logo} className='mx-2' alt="logo" />
        <h2 className='my-0' >
         CodeVista

        </h2>
    </a>
 
   
  </div>
</nav>
  </>
}
