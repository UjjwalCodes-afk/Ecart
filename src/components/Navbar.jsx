import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { items } from "./Data";
import { CiShoppingCart } from "react-icons/ci";
export default function Navbar({ setData, cart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchItem, setsearchItem] = useState("");
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category == category);
    console.log(element);
    setData(element);
  };
  const filterByPrice = (price) => {
    const ele = items.filter((product) => product.price >= price);
    setData(ele);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchItem}`);
  };
  return (
    <>
      <header>
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>
          <form
            // onClick={handleSubmit}
            onSubmit={handleSubmit}
            className="search-bar"
          >
            <input
              value={searchItem}
              onChange={(e) => setsearchItem(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <CiShoppingCart  style={{
              fontSize : '2rem'
            }}/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        {
          location.pathname === '/' && (
            <>
            <div className="navbar-wrapper">
          <div className="items"> Filter by {"=>"}</div>
          <div className="items" onClick={() => setData(items)}>
            No filters
          </div>
          <div className="items" onClick={() => filterByCategory("mobiles")}>
            Mobiles
          </div>
          <div className="items" onClick={() => filterByCategory("laptops")}>
            Laptops
          </div>
          <div className="items" onClick={() => filterByCategory("tablets")}>
            Tablets
          </div>
          <div className="items" onClick={() => filterByPrice(29999)}>
            {">="}29999
          </div>
          <div className="items" onClick={() => filterByPrice(49999)}>
            {">="}49999
          </div>
          <div className="items" onClick={() => filterByPrice(69999)}>
            {">="}69999
          </div>
          <div className="items" onClick={() => filterByPrice(89999)}>
            {">="}89999
          </div>
        </div>
            </>
          )
        }
      </header>
    </>
  );
}
