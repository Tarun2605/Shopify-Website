import { useState } from "react"
import { useContext } from "react"
import { Appcontext } from "../Context/Appcontext"


export default function Cart(){
    let {userdata, setuserdata, setsidebardata, togglesidebar, sidebar}=useContext(Appcontext)
    function function1(){
        if (sidebar){
            togglesidebar(false);
        }
        else{
            togglesidebar(true);
        }
    }
  return (
    <div className="container2">
      <div className="product-cont">
        {userdata.length!=0?
        userdata.map((data)=>(
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
                    ))
            :
        <></>
        }
      </div>
    </div>
  )
};
