import React from 'react'
import "./header.css"
import Cd from './Cd'
import Socialheader from './Socialheader'

export default function Header() {
  return (
    <header>
      <div className='container header_sec'>
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className='text_light'>Fullstack Developer</h5>
        <Cd />
        <Socialheader />
        <div className='header_profile'>
        <img src='./assets/me.png' alt='profile' />
        </div>
        <a href='#contact' className='header_scroll'>Scroll Down</a>
      </div>
    </header>
  )
}
