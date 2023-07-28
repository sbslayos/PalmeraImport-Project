import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Product from './Product';
import Cart from './shopping_Cart';
import NewAccount from './NewAccount';
import Admin from './Admin';
import Categoria from './Categoria';
import ActualizarCategoria from './ActualizarCategoria';
import HomeProductos from './productos/HomeProductos';
import CrearProductos from './productos/CrearProductos';


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
                <Route path="/cart" exact element={<Cart/>}/>
                <Route path='/new-account' exact element={<NewAccount/>}/>
                <Route path='/crear-categoria' exact element={<Categoria/>}/>
                <Route path='/actualizar-categoria/:idCategoria' exact element={<ActualizarCategoria/>}/>
                <Route path='/home-productos/:idCategoria' exact element={<HomeProductos/>}/>
                <Route path='/crear-producto/:idCategoria' exact element={<CrearProductos/>}/>
                <Route path='/admin' exact element={
                    <>
                    <Admin />
                    </>
                }/>
            </Routes>

           
            <Footer/>
            

        </Router>
        

    )
}
export default Navigation;