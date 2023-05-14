import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';

const Navigation = () => {

    return (
        
        <Router>
            <Header/>
            
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/about" exact element={<About/>} />
            </Routes>
        </Router>

    )
}
export default Navigation;