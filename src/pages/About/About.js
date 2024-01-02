import React from 'react'
import './About.scss'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div id='outer_div' className='row mx-auto mt-md-5'>
            <h2 className='text-dark' style={{ fontSize: '3em', fontWeight: 'bolder' }}>About Me.</h2>

            {/* <div className="container"> */}
            <div className="wrapper">
                <ul className="sessions">
                    <li className='li'>
                        <div className='d-flex justify-content-between'>
                            <div className="time fw-bold">BS Computer Science</div>
                            <div className='_duration'>2021 - 2025</div>
                        </div>
                        <p>I'm doing Bachelor in Computer Science from Govt. Islamia College Faisalabad.</p>
                    </li>
                    <li className='li'>
                        <div className='d-flex justify-content-between'>
                            <div className="time fw-bold">Full Stack Web & Mobile Application Development</div>
                            <div className='_duration'>2022 - 2023</div>
                        </div>
                        <p>I have got certification of "Full Stack Web and Mobile Application Development" from Saylani Mass IT Training Institute (SMIT) Faisalabad.</p>
                    </li>
                    <li className='li'>
                        <div className='d-flex justify-content-between'>
                            <div className="time fw-bold">F.Sc (Pre-Engineering)</div>
                            <div className='_duration'>2018 - 2020</div>
                        </div>
                        <p>I have done intermediate in F.Sc (pre-engineering) from Superior College Shahkot distt. Nankana Sahib.</p>
                    </li>
                    <li className='li'>
                        <div className='d-flex justify-content-between'>
                            <div className="time fw-bold">Matric</div>
                            <div className='_duration'>2016 - 2018</div>
                        </div>
                        <p>I have got my Matric degree from Millat Public High School Mananwala distt. Sheikhupura.</p>
                    </li>
                </ul>
            </div>
            {/* </div> */}
            <Link id='see_more' to={'/projects'} style={{ color: '#545454' }} >
                Lets Continue To Projects <BsArrowRight className='animate__animated animate__slideInLeft animate__infinite mx-4' />
            </Link>
        </div>
    )
}
