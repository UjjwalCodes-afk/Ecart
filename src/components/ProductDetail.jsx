import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { items } from './Data';
import Products from './Products';
export default function ProductDetail({cart,setCart}) {
    const {id} = useParams();
    const [product, setproduct] = useState({});
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(() => {
      const filterProduct = items.filter((product) => product.id == id);
    //   console.log(filterProduct);
    setproduct(filterProduct[0]);
    const relatedProducts = items.filter((s) => s.category === product.category);
    setRelatedProducts(relatedProducts);
    }, [id, product.category]);
    
  return (
    <>
    <div className="con">
        <div className="img1 text-center">
        <img src={product.imgSrc} alt="" width="300px" height="300px" />
        </div>
        
        <div className='text-center'>
        <div className="card-body">
                  <h1 className="card-title">{product.title}</h1>
                  <p className="card-text">
                    {product.description}
                  </p>
                  <button className='btn btn-primary btn1'>{product.price}{"₹"}</button>
                  <button className="btn btn-warning btn2">Add to cart</button>
                </div>
        </div>
    </div>
    <h2 className='text-center relatedprod'>Related Products</h2>
    <Products cart={cart} setCart = {setCart} items={relatedProducts}></Products>       
    </>
  )
}
