import { useContext, useEffect, useSyncExternalStore } from "react";
import AppcontextProvider from "../Context/Appcontext";
import { Appcontext } from "../Context/Appcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faGear,faGears, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import App from "../App";
import "react-toastify/dist/ReactToastify.css";

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export default function Products(){
    const {loggedin, setloggedin, name,sidebar_data,setsidebardata,loaded, setloaded}=useContext(Appcontext);
    let [gearclick, setgearclick]=useState(false);
    setloggedin(true);
    let [gearclick1, setgearclick1]=useState(false);
    let [catselect, setcatselect]=useState("all");
    let [data_disp, setdata_disp]=useState([]);
    // let [loaded, setloaded]=useState(false);

    let color1="rgb(150, 150, 147)";
    let {sidebar, togglesidebar}=useContext(Appcontext);
    function notify() {
        console.log("toaster");
        toast('🦄 Wow so easy!');
          console.log("toaster passed");
      }
    function GearclickHandler(){
        if (!gearclick){
            setgearclick(true);
            setTimeout(() => {
                setgearclick1(true);
            }, 300);
        } 
        else{
            setTimeout(() => {
                setgearclick1(false);
            }, 300);
            setgearclick(false);
        }
    }
    
    let data=[];
    let data1=[];
    useEffect(()=>{
        let handler=async()=>{
            setloaded(false);
            data=[];
            data1=[];
            try {
                if (catselect=="all"){
                    let res=await fetch('https://fakestoreapi.com/products');
                    data1=await res.json();
                    // setpageno(data1.length);
                    console.log(data1);
                    setdata_disp(data1);
                    setloaded(true);
                    setTimeout(() => {
                        setloaded(true);
                    }, 2000);
                }
                else{
                    let url="https://fakestoreapi.com/products/category/"+catselect;
                    let res=await fetch(url);
                    data1=await res.json();
                    setdata_disp(data1);
                    console.log(data1.length);
                    setloaded(true);
                    setTimeout(() => {
                        setloaded(true);
                    }, 2000);
                }
                
            } 
            catch (error) {
                console.log("object");
                setloaded("errror");
                // alert("phat gaya");
            }
            
        }
        handler();
    },[catselect]);
    function function1(){
        if (sidebar){
            togglesidebar(false);
        }
        else{
            togglesidebar(true);
        }
    }
  return (
    <>
        {loggedin?
    <div>
      <div className="container1">
        <div className="left-half">
            
            <div className="gearcont" onClick={GearclickHandler}>
                <FontAwesomeIcon icon={faGear} className={`gear ${gearclick? "antirot" : "rot"}`}></FontAwesomeIcon>
                <div className={`textcont1 ${gearclick? "disappear": "appear"}`} style={{display: gearclick1? "none":""}}>Categories</div>
            </div>
            <div className={`category ${gearclick? "appear":"disappear"} ${catselect=="all"? "catselected":""}`} style={{display: gearclick1? "":"none"}} onClick={()=>{setcatselect("all")}}>All Products</div>
            <div className={`category ${gearclick? "appear":"disappear"} ${catselect=="men's clothing"? "catselected":""}`} style={{display: gearclick1? "":"none"}} onClick={()=>{setcatselect("men's clothing")}}>Men's clothing</div>
            <div className={`category ${gearclick? "appear":"disappear"} ${catselect=="electronics"? "catselected":""}`} style={{display: gearclick1? "":"none"}} onClick={()=>{setcatselect("electronics")}}>Electronics</div>
            <div className={`category ${gearclick? "appear":"disappear"} ${catselect=="jewelery"? "catselected":""}`} style={{display: gearclick1? "":"none"}} onClick={()=>{setcatselect("jewelery")}}>Jewelery</div>
            <div className={`category ${gearclick? "appear":"disappear"} ${catselect=="women's clothing"? "catselected":""}`} style={{display: gearclick1? "":"none"}} onClick={()=>{setcatselect("women's clothing")}}>Women's clothing</div>
            
            
        </div>
        <div className="right-half">
        </div>
      </div>
      <div className="product-cont">
            {
                loaded?
                <>
                  {
                    data_disp.map((data)=>{
                        data["cart"]=false;
                        return(
                        <div className="card">
                            <div className="imgcont">
                                <img src={data.image} className="image"/>
                            </div>
                            <div className="txtcont">
                                <div>{data.title}</div>
                                <div className="pricdet button1" onClick={()=>{function1(); setsidebardata(data)}}>
                                    View Details
                                </div>
                            </div>
                        </div>
                        )
                    })
                  }
                </>
                :
                <img src={require('../Assets/Chunk-3.8s-200px.gif')} className="loader"/>
            }
      </div>

    </div>:
    <>
        no
    </>
        }
    </>
  )
};
