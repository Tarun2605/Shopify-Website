import { useEffect, useState } from "react";
import AppcontextProvider, { Appcontext } from "../Context/Appcontext";
import { useContext } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useLocation } from "react-router-dom";

const slides=[
    "https://m.economictimes.com/thumb/msid-94370153,width-600,resizemode-4/amazon-great-indian-festival-sale-2022-live-updates.jpg",
    "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-78713419/78713419.jpg",
    "https://www.businessinsider.in/photo/94004700/amazon-great-indian-festival-sale-best-deals-and-offers.jpg?imgsize=90582",
    "https://images.hindustantimes.com/tech/img/2022/09/05/960x540/Flipkart_sale_1662379551619_1662379562805_1662379562805.PNG",
    "https://rukminim2.flixcart.com/fk-p-flap/850/400/image/3a7e38dee3a32c5d.jpg?q=90",
]

export default function Home(){
    const {loggedin, setloggedin, name}=useContext(Appcontext);
    setloggedin(true)
    
    

    return(
        <>
            {loggedin? 
                <div className="homewrapper" >
                Explore our exclusive deals and discounts
                <div className="slidecont1">
                    <Slide>
                        {
                            slides.map((slideimg, index)=>(
                                <div className="slides" style={{'backgroundImage': `url(${slideimg})` }}></div>
                            )
                            )
                        }
                    </Slide>
                </div>
                    <div className="textcont">
                    <div className="heading">Welcome to Shopify</div>
                    
                    At Shopify, we are dedicated to making your online shopping experience convenient, enjoyable, and rewarding. Whether you're on the hunt for the latest fashion trends, tech gadgets, home essentials, or special gifts, we've got you covered.<br></br><br></br>
                    <div className="txtcont1">
                    <span style={{textDecoration:"underline"}}>Explore Our Vast Collection</span>
                    <br></br>
                    Dive into our extensive collection of products that cater to a wide range of tastes and preferences. From stylish clothing and accessories to state-of-the-art electronics, and from home decor to unique gifts, we have something for everyone.
                    </div>
                    <div className="txtcont1">
                    <span style={{textDecoration:"underline"}}>Shop with Confidence</span>
                    <br></br>
                    Your security and satisfaction are our top priorities. We guarantee a safe and secure shopping environment, and your personal information is always kept confidential. If you're not completely satisfied with your purchase, our hassle-free return policy ensures your peace of mind.
                    </div>
                    <div className="txtcont1">
                    <span style={{textDecoration:"underline"}}>User-Friendly Navigation</span>
                    <br></br>
                    Our website is designed with you in mind. Our easy-to-navigate interface and search tools help you find what you're looking for quickly. Filter your searches by category, price, brand, or customer ratings to find the perfect item.
                    </div>
                    <div className="txtcont1">
                    <span style={{textDecoration:"underline"}}>Contact Us</span>
                    <br></br>
                    Our customer support team is here to assist you with any questions or concerns you may have. Contact us via email, phone, or live chat during our business hours.
                    
                    </div>
                    
                    Thank you for choosing Shopify. Happy shopping!
                    </div>
                </div>
                
            
            :
             "no"}
        </>
    )
}