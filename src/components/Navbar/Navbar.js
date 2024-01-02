import React from 'react'
import './Navbar.scss'
import logo from '../../assets/flower-icon_159242-33506.jpg'
import { Link } from 'react-router-dom'
import { IoLogoWebComponent } from "react-icons/io5";

export default function Navbar() {
    return (
        // <nav className="navbar navbar-expand-sm navbar-light bg-transparent mx-auto">
        //     <Link className='navbar-brand' to={'/'}><img src={logo} alt="logo" style={{ width: '12%' }} /></Link>
        //     <button
        //         className="navbar-toggler d-lg-none"
        //         type="button"
        //         data-bs-toggle="collapse"
        //         data-bs-target="#collapsibleNavId"
        //         aria-controls="collapsibleNavId"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //     ></button>
        //     <div className="collapse navbar-collapse" id="collapsibleNavId">
        // <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        //     <li className="nav-item mx-sm-4">
        //         <Link to={'/about'}>About</Link>
        //     </li>
        //     <li className="nav-item mx-sm-4">
        //         <Link to={'/projects'}>Projects</Link>
        //     </li>
        //     <li className="nav-item mx-sm-4">
        //         <Link to={'/contact'}>Contact</Link>
        //     </li>
        // </ul>
        //     </div>
        // </nav>


        <nav className="navbar navbar-expand-lg bg-transparent mx-auto py-lg-4">
            <div className="container-fluid">
                <Link className='navbar-brand' id='' to={'/'}><IoLogoWebComponent style={{fontSize:'190%'}} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-sm-3">
                            <Link className='nav_link' to={'/about'}>About</Link>
                        </li>
                        <li className="nav-item mx-sm-3">
                            <Link className='nav_link' to={'/projects'}>Projects</Link>
                        </li>
                        <li className="nav-item mx-sm-3">
                            <Link className='nav_link' to={'/contact'}>Contact</Link>
                        </li>
                        <li className="nav-item mx-sm-3">
                            <Link className='nav_link' to={'/resume'}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}
