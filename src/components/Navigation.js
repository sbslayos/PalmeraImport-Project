import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';

const Navigation = () => {

    return (
        
        <Router>
            <>
            <Header/>
            
            </>
            
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/about" exact element={<About/>} />

            </Routes>

            <Footer/>
        </Router>

    )
}
export default Navigation;