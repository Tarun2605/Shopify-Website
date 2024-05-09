import { NavLink, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { Appcontext } from "../Context/Appcontext";
import { useLocation } from "react-router-dom";

export default function Navbar(){
    const navigate=useNavigate();
    let {activ, setactiv}=useContext(Appcontext);
    const location = useLocation();
    // console.log(location);
    if (location.pathname=="/cart"){
        setactiv("cart");
    }
    else if (location.pathname=="/"){
        setactiv("home");
    }
    else if (location.pathname=="/about"){
        setactiv("aboutus");
    }
    else if (location.pathname=="/login"){
        setactiv("login");
    }
    else if (location.pathname=="/products"){
        setactiv("products");
    }
    return (
        <>
           <div className="navbarcont">
            <div className="cont1">
            Shopify
            <div className="subcont1">Your Shopping, Your Way!</div>
            </div>
            <div className="cont2">
                <div onClick={()=>{navigate('/'); setactiv("home")}} style={{background: activ=="home"? "white":"rgba(240, 248, 255, 0)"}}>Home</div>
                <div onClick={()=>{navigate('/products'); setactiv("products")}} style={{background: activ=="products"? "white":"rgba(240, 248, 255, 0)"}}>Products</div>
                <div onClick={()=>{navigate('/cart'); setactiv("cart")}} style={{background: activ=="cart"? "white":"rgba(240, 248, 255, 0)"}}>Cart</div>
                <div onClick={()=>{navigate('/about'); setactiv("aboutus")}} style={{background: activ=="aboutus"? "white":"rgba(240, 248, 255, 0)"}}>About Us</div>
            </div>
            <div className="cont3">
                <div className="logincont" onClick={()=>{navigate('/login'); setactiv("login")}}> Login</div>
            </div>
           </div>
        </>
    )
}