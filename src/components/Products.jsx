import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products({items, cart,setCart}) {
  const addToCart = (id,price,title,description, imgSrc) => {
    const obj ={
      id,price,title,description,imgSrc,
    }
    setCart([...cart, obj]);
    console.log("Cart element is : ", cart);
    toast.success("Your item is added to the cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  return (
    <>
    <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
      <div className="container my-5">
        <div className="row">
        {items.map((product) => {
          return (
            <>
            <div key={product.id} className="col-lg-4  col md-6 my-3 md-6 text-center">
              <div className="card" style={{ width: "18rem" }}>
                <Link to = {`/product/${product.id}`} style={{
                  display :"flex",
                  justifyContent : "center",
                  alignItems : "center",
                }}>
                <img src = {product.imgSrc}  alt="..." width="250px"/>
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.description}
                  </p>
                  <button className='btn btn-primary btn1'>{product.price}{"₹"}</button>
                  <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className="btn btn-warning btn2">Add to cart</button>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </div></div>
    </>
  );
}
