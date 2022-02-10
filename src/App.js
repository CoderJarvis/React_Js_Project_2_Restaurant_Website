import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path = '/' element={<Home/>} />
                    <Route exact path = '/services' element={<Services/>} />
                    <Route exact path = '/about' element={<About/>} />
                    <Route exact path = '/contact' element={<Contact/>} />
                </Routes>
                
            </Router>

        </>
    )
}

export default App
