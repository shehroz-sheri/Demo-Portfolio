import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import 'animate.css';

export default function Home() {
  return (
    <div id='home' className='mx-auto mt-lg-5'>
      <h1 className='my-4 text-dark'>I'M SHEHROZ ARSHAD</h1>

      <p>I am a dedicated <strong>Full Stack Web</strong> and <strong>Android App Developer</strong>, proficient in languages like <strong>HTML, CSS, JavaScript, React Native</strong> and <strong>MongoDB database</strong>.</p>

      <p>With expertise in front-end frameworks like <strong>Bootstrap, Tailwind CSS</strong> and <strong>React</strong> &amp; back-end technologies such as <strong>Node.js</strong> and <strong>Express</strong>, I specialize in creating seamless and responsive applications. My commitment to delivering high-quality software is evident in my ability to craft user-friendly interfaces and scalable back-end solutions. Whether it's web or mobile development, I bring ideas to life by combining technical proficiency with a passion for creating innovative digital experiences.</p>

      <Link id='see_more' to={'/about'} style={{ color: '#545454' }} >
        See More About Me <BsArrowRight className='animate__animated animate__slideInLeft animate__infinite mx-4' />
      </Link>
    </div>
  )
}
