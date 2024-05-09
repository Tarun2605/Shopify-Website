import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedin,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons"
// import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { NavLink, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { Appcontext } from "../Context/Appcontext"

export default function Footer(){
    const navigate=useNavigate();
    let {activ, setactiv}=useContext(Appcontext);
  return (
    <div className="footercont">
      <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item social-icon__link">
      <FontAwesomeIcon icon={faFacebook} />
        </li>
      <li class="social-icon__item social-icon__link">
      <FontAwesomeIcon icon={faTwitter} />
        </li>
      <li class="social-icon__item social-icon__link">
      <FontAwesomeIcon icon={faLinkedin} />
        </li>
      <li class="social-icon__item social-icon__link">
      <FontAwesomeIcon icon={faInstagram} />
        </li>
    </ul>
    <ul class="menu">
      <li class="menu__item menu__link" onClick={()=>{setactiv("home")}}><NavLink to={'/'} className={"menu__item menu__link"}>Home</NavLink></li>
      <li class="menu__item menu__link" onClick={()=>{setactiv("products")}}><NavLink to={'/products'} className={"menu__item menu__link"}>Products</NavLink></li>
      <li class="menu__item menu__link" onClick={()=>{setactiv("cart")}}><NavLink to={'/cart'} className={"menu__item menu__link"}>Cart</NavLink></li>
      <li class="menu__item menu__link" onClick={()=>{setactiv("aboutus")}}><NavLink to={'/about'} className={"menu__item menu__link"}>About Us</NavLink></li>

    </ul>
    <p>&copy;2021  | All Rights Reserved</p>
  </footer>
  
    </div>
  )
};
