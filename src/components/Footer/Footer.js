import React from 'react'
import './Footer.scss'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='mx-auto'>
      <div id='foot_div' className='d-flex justify-content-between'>
        <Link target='blank' to={'https://facebook.com/shehroz.arshad.376'}><FaFacebookF /></Link>
        <Link target='blank' to={'https://linkedin.com/in/shehroz-arshad'}><FaLinkedinIn /></Link>
        <Link target='blank' to={'https://github.com/shehroz-sheri'}><FaGithub /></Link>
        <Link target='blank' to={'https://mail.google.com/mail/?view=cm&fs=1&to=shehrozsheri36347@gmail.com'}><SiGmail /></Link>
        <Link target='blank' to={'https://wa.me/923204803895'}><FaWhatsapp /></Link>
        <Link target='blank' to={'https://instagram.com/shehroz.sheri1'}><FaInstagram /></Link>
      </div>
    </footer>
  )
}
