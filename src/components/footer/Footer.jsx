import React from 'react'
import "./footer.css"
import { FaFacebookF, FaInstagram, FaTwitter, FaRegCopyright } from "react-icons/fa"

export default function Footer() {
  return (
    <footer>
        <a href='*' className='footer_logo'>EGATOR </a>
        <ul className='footer_nav'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='footer_social'>
            <a href='https://facebook.com'><FaFacebookF/></a>
            <a href='https://instagram.com'><FaInstagram/></a>
            <a href='https://twitter.com'><FaTwitter/></a>
        </div>
        <div className="footer_copyright">
            <small><FaRegCopyright/> EGATOR Tutorials. All rights reserved.</small>
        </div>
    </footer>
  )
}
