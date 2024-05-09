import { faDedent } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
export default function About(){
 
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const FadeDown=batch(FadeIn(), Move(), Sticky());
  return (

    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }}>Welcome to Shopify - Your Ultimate Shopping Destination!
    <br></br><br></br>
    Shopify is your one-stop shop for a wide range of high-quality products, from fashion to electronics, all in one convenient place. With a user-friendly platform and dedicated customer support, we're here to make your shopping experience enjoyable and hassle-free. Thank you for choosing Shopify. Happy shopping!</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "40px" }}>Meet Our Devs</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
        <div className='devs'>
        <div className='imgcont1'>
          <img src='https://i.pinimg.com/736x/4f/c7/cc/4fc7cc31a156ec8f56607c5ce020d6a6.jpg' className='steelimg'></img>
        </div>
        <div className='txtcont2'>
        Mr. Steel <br></br> Front & Backend Genius
        <br></br>
        Meet Mr. Steel, our front and backend expert at Shopify. He's the driving force behind our website's smooth performance and user-friendly design. With a passion for precision, he ensures your online shopping experience is top-notch.
        <br></br>
        </div>
        <div className='txtcont3'>
          
        When not coding, Mr. Steel enjoys his coffee, explores tech gadgets, and shares his knowledge with fellow developers. His dedication makes Shopify a coding masterpiece. Thanks, Mr. Steel!
        </div>
        </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeDown}>
          <div className='txtcont4'>
            A few words from our developer
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
          <span style={{ fontSize: "1.5rem", textAlign:"center" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            This is a website created for projects and practice purpose
            <Animator animation={MoveOut(1000, 0)}>Good bye </Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you </Animator>
            <Animator animation={batch(ZoomIn(), ZoomOut())}>Have a nice day ahead</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <div className='emp'></div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
};
