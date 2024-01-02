import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import About from './About/About'
import Contact from './Contact/Contact'
import NoPage from './NoPage'
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'

export default function Index() {
    return (
        <>
            <Navbar />
            <main style={{ margin: '0 10px' }}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/resume' element={<Resume />} />

                    <Route path='/*' element={<NoPage />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}
