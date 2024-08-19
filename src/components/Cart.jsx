import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart({cart,setCart}) {
  return (
    <>
    <div className='cartprodpage'>
    {
      cart.length ==0 ? (
        <>
        <div className="text-center">
          <h2>Your cart is empty</h2>
          <Link to={'/'} className='btn btn-warning'>Continue shopping</Link>
        </div>
        </>
      ) :
    cart.map((product) => {
      return <>
       <div className="card mb-3" style={{width : '700px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." width="200"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <button className='btn btn-primary btn1 prodpricecart '>{product.price}{"₹"}</button>
                  <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className="btn btn-warning btn2 prodaddtocart">Buy Now</button>
      </div>
    </div>
  </div>
</div>
      </>
    })}
    </div>
    <div className="container text-center" style={{
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
    }}>
      <button className='btn btn-warning btncheckout'>Checkout</button>
      <button className='btn btn-danger btnclear'> Clear</button>
    </div>
    </>
  )
}
