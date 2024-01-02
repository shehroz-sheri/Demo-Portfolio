import React, { useState } from 'react'
import './Projects.scss'
import { Link } from 'react-router-dom'
import BankSite from '../../assets/Bank App.png'
import WeatherApp from '../../assets/Weather API.png'
import StickyTodo from '../../assets/Sticky Todo crop.png'
import BSAdminDashboard from '../../assets/BS Admin Dashboard.png'
import SimpleBS from '../../assets/Simple BS.png'
import SimpleTodo from '../../assets/Simple Todo.png'
import OLXClone from '../../assets/OLX Clone frontend.png'
import LandingPage from  '../../assets/Landing Page Simple.png'
import Foodious from '../../assets/BS Foodies Web.png'


export default function Projects() {
    return (
        <div id='outer_div' className='mx-auto mb-5'>
            <h2 className='text-dark my-md-5' style={{ fontSize: '3em', fontWeight: 'bolder' }}>Projects</h2>
            <div className="container">
                <div className="row mx-auto d-flex justify-content-between">
                    <div style={{ backgroundImage: `url('${BankSite}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://bank-app-by-shehroz-arshad.vercel.app/'} target='blank' className='text-light h4 fw-bold'>Bank App</Link>
                            <p className='text-white' style={{ fontSize: '0.9em' }}>A simple bank app made with React and Firebase supporting all the functionalities.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>React</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>SCSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Firebase</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Context</span>
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url('${WeatherApp}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://weather-api-plum.vercel.app/'} target='blank' className='text-light h4 fw-bold'>Weather API</Link>
                            <p className='text-white' style={{ fontSize: '0.9em' }}>A simple Weather app made with React and Weather Api.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>React</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>SCSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Weather</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>API</span>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="row mx-auto d-flex justify-content-between">
                    <div style={{ backgroundImage: `url('${StickyTodo}')`, backgroundSize: 'contain' }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://sticky-todo-six.vercel.app'} target='blank' className='text-dark h4 fw-bold'>Todo App</Link>
                            <p className='text-dark' style={{ fontSize: '0.9em' }}>Todo App made with React and Firebase.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>React</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>SCSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Firebase</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Context</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>CRUD</span>
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url('${BSAdminDashboard}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://bootstrapadmindashboardbyshehroz.surge.sh/'} target='blank' className='text-dark h4 fw-bold'>Admin Dashboard</Link>
                            <p className='text-dark' style={{ fontSize: '0.9em' }}>A simple weather app made with React and Weather Api.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Html</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>SCSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Bootstrap</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Frontend</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mx-auto d-flex justify-content-between">
                    <div style={{ backgroundImage: `url('${SimpleBS}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://shehroz-arshad-90771-css-assign-4.surge.sh/'} target='blank' className='text-white h4 fw-bold'>Web Page Design</Link>
                            <p className='text-white' style={{ fontSize: '0.9em' }}>Simple design of a Web page using CSS.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Html</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>CSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Design</span>
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url('${SimpleTodo}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://first-react-todo-by-shehroz-arshad.netlify.app/'} target='blank' className='text-dark h4 fw-bold'>Simple Todo</Link>
                            <p className='text-dark' style={{ fontSize: '0.9em' }}>A simple Todo app made with React JS.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>React</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>SCSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Bootstrap</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>CRUD</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row mx-auto d-flex justify-content-between">
                    <div style={{ backgroundImage: `url('${OLXClone}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://olx-app-clone.vercel.app/'} target='blank' className='text-dark h4 fw-bold'>OLX Website Clone</Link>
                            <p className='text-dark' style={{ fontSize: '0.9em' }}>Clone of OLX website using React and Bootstrap.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>React</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>SCSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Design</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Bootstrap</span>
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url('${LandingPage}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://regal-otter-59ced6.netlify.app/'} target='blank' className='text-light bg-dark h4 fw-bold'>Simple Landing Multi-Page Website</Link>
                            <p className='text-white' style={{ fontSize: '0.9em' }}>A simple landing multi-page website designed by using Bootstrap..</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Html</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>CSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Bootstrap</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Designing</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mx-auto d-flex justify-content-between">
                    <div style={{ backgroundImage: `url('${Foodious}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://foodious-by-shehroz.surge.sh'} target='blank' className='text-white h4 fw-bold'>Food Website Design</Link>
                            <p className='text-whiteD' style={{ fontSize: '0.9em' }}>Simple Food Website Design using Bootstrap.</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Html</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>SCSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Design</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Bootstrap</span>
                            </p>
                        </div>
                    </div>

                    {/* <div style={{ backgroundImage: `url('${LandingPage}')` }} className="col-12 col-lg-6 card my-3 position-relative">
                        <div className='position-absolute bottom-0 card_project_info mx-2'>
                            <Link to={'https://first-react-todo-by-shehroz-arshad.netlify.app/'} target='blank' className='text-light bg-dark h4 fw-bold'>Simple Landing Multi-Page Website</Link>
                            <p className='text-white' style={{ fontSize: '0.9em' }}>A simple landing multi-page website designed by using Bootstrap..</p>
                            <p>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Html</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>CSS</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Bootstrap</span>
                                <span className='text-light span_functionalities rounded-5 px-2 mx-1'>Designing</span>
                            </p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
