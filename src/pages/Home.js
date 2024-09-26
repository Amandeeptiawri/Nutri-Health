import React from 'react'
import HeroSection from '../HeroSection';
import Items from '../Components/Items';
import Info from '../Components/Info';
import Slider from '../Components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recipe from '../Components/Recipe';



function Home() {
  return (
    <>
  <HeroSection></HeroSection>
  <Items></Items>
  <Info></Info>
  <Recipe></Recipe>
  <Slider></Slider>
  

  
   
   
    
    </>
  )
}

export default Home;