import logo from './logo.svg';
import './App.css';
import { Routes, Route, useSearchParams, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Appcontext } from './Context/Appcontext';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Footer from './Components/Footer';
import ScrollToTop from "react-scroll-to-top";
import Sidemenu from './Components/Sidemenu';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Button from 'react-bootstrap/Button';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  let {sidebar, togglesidebar,sidebar_data,setsidebardata,loaded, setloaded, userdata, setuserdata  }=useContext(Appcontext);
  
  
  useEffect(()=>{
    // setcart(sidebar_data.cart);
    if (userdata==[]){
      setcart(false);
    }
    else{
      let check=false;
      userdata.map((data)=>{
        if (data.id===sidebar_data.id){
          
          check=true;
        }
      })
      if (check){
        setcart(true);
      }
      else{
        setcart(false);
      }
    }
  }
    ,[sidebar])
  let [cart, setcart]=useState(false);
  function addcarthandler(){
    // sidebar_data.cart=true;
    // console.log(sidebar_data);
    setcart(true);
    let temp=userdata;
    temp.push(sidebar_data);
    setuserdata(temp);
    console.log(userdata);
  }
  function add_notify() {
    toast('Product added', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  function rem_notify(){
    toast.error('Product removed', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  function remcarthandler(){
    console.log("object");
    // sidebar_data.cart=false;
    let temp=[];
    // console.log(temp[0].id);
    // console.log(sidebar_data.id);
    // temp=temp.filter((data)=> {if (data.id==sidebar_data.id){return data}});
    userdata.map((data)=>{
      if (data.id!=sidebar_data.id){
        temp.push(data);
      }
    })
    
    
    setcart(false);
    setuserdata(temp);
  }
  return (
    <>
    <div className='wrapper'>
    <Navbar/>
      <div className='content'>
        <Routes>
            <Route path='/' element={<Home></Home>}/>
            <Route path='/login' element={<Login></Login>}/>
            <Route path='/cart' element={<Cart></Cart>}/>
            <Route path='/products' element={<Products></Products>}/>
            <Route path='/about' element={<About></About>}/>
        </Routes>
      </div>
      <Footer></Footer>
      
    <Sidebar onBackdropClick={() => togglesidebar(false)} toggled={sidebar} breakPoint="always" style={{direction:"ltr", color:"black"}} rtl backgroundColor='white' width='40vw' color='black' className='sidebar'>
    <div className='sidebarcont'>
        <img src={`${sidebar_data.image}`} className='image_side'/>
        <div className='side_title'>{sidebar_data.title}</div>
        <div className='side_desc'><span>Description: </span>{sidebar_data.description}</div>
        <div className='side_categ'><div>Category</div> {sidebar_data.category}</div>
        <div className='rating'>
        <div className='side_rate'><div>Rating:</div> {`${sidebar_data.rating.rate}`}</div>
        <div className='side_rate'><div>Number of reviews: </div>{`${sidebar_data.rating.count}`}</div>
        </div>
        <div className='price'><div>Price</div> Rs. {sidebar_data.price}/-</div>
        {cart?
        <>
        <div className='remcart' onClick={()=>{remcarthandler(); rem_notify()}}>Remove from cart <FontAwesomeIcon icon={faTrash}/> 
        </div>
        
        </>
        :
        <div className='addtocart' onClick={()=>{addcarthandler(); add_notify()}}>Add-to cart <FontAwesomeIcon icon={faCartPlus} /> </div>
        }
    </div>
      </Sidebar>
      <ToastContainer/>
      </div>
    </>
  );
}

export default App;
