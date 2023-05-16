'use client'; 
import { useState } from 'react';
import { component } from 'react';
import { Carousel } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'next/image';
 
export default function Slideshow({ children }) {

 const [index, setIndex] = useState(0);
 const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
 };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        
            <Carousel.Item  interval={4000}>
                <img src="/Alice.png" alt="slides" />
                <Carousel.Caption >
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ipsa alias. Laboriosam ut, repudiandae pariatur fugiat, totam, qui asperiores voluptate consequuntur distinctio earum magni amet! Repudiandae sequi aliquid architecto perspiciatis?</p>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={4000}>
                <img src="/Alice.png" alt="slides" />
                <Carousel.Caption >
                    <h3>Title</h3>
                    <p>body</p>
                   
                </Carousel.Caption>
            </Carousel.Item>

    </Carousel>
     
    
     
   
  
 
  
 
      {children}
    </>
  );
}