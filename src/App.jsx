import React, {useState} from 'react'
import Navbar from './components/Navbar';
import './index.css';
import Products from './components/Products';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';
import { items } from './components/Data';
export default function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
    <Router>
    <Navbar setData = {setData} cart= {cart}/>
    <Routes>
      <Route path='/' element = {<Products items = {data} cart = {cart} setCart = {setCart}/>}/>
      <Route path='/product/:id' cart = {cart} setCart = {setCart} element = {<ProductDetail/>}/>
      <Route path='/search/:term' cart ={cart} setCart = {setCart} element = {<SearchItem/>}/>
      <Route path='/cart' element = {<Cart cart ={cart} setCart = {setCart}/>}/>
    </Routes>
    </Router>
    </>
  )
}
