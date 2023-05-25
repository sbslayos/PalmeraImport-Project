import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Product from './Product';
import shopping_Cart from './shopping_Cart';

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
                <Route path="/product" exact element={<Product/>}/>
                <Route path="/cart" exact element={<shopping_Cart/>}/>
            </Routes>

            <>
            <Footer/>
            </>

        </Router>
        

    )
}
export default Navigation;