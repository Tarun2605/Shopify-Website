import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Appcontext=createContext();

export default function AppcontextProvider({children}){
    let [loggedin, setloggedin]=useState(false);
    let [name, setname]=useState("User");
    let [activ, setactiv]=useState("home");
    let [sidebar, togglesidebar]=useState(false);
    let [sidebar_data, setsidebardata]=useState(
        {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
        "rate": 3.9,
        "count": 120
        },
        "cart":false

    });
    let [userdata, setuserdata]=useState([]);
    let [loaded, setloaded]=useState(false);

    const value={
        loggedin,
        setloggedin,
        name, 
        setname,
        activ,
        setactiv,
        sidebar,
        togglesidebar,
        sidebar_data,
        setsidebardata,
        loaded,
        setloaded,
        userdata,
        setuserdata,
    };
    return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>
}