import React from 'react'
import "./about.css";
import { FaAward, FaUserFriends } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className='container about_sec'>
        <div className="about_me">
          <div className="about_me_img">
            <img src='../assets/me-about.jpg' alt='me' />
          </div>
        </div>

        <div className="about_txt">
          <div className="about_card">
            <article className="about_card-cnt">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card-cnt">
              <FaUserFriends className='about_icon' />
              <h5>Client</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className="about_card-cnt">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus vel rerum, sed sint perspiciatis pariatur et consectetur magni nemo quos veniam. Vel nisi, facilis expedita alias placeat et sit voluptas?</p>
          <a href='#contact' className=''>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
