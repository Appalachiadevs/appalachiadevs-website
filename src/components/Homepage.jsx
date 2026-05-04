import React, { useEffect } from "react";
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import Prices from './Prices';
import CallToAction from './CallToAction';
import Review from './Review';
import Footer from './Footer';
import SeoHead from "./SeoHead";

function Homepage() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <SeoHead
        title="Custom Web Development & Digital Agency"
        description="AppalachiaDevs delivers custom web apps, integrations, and AI-ready products from Miami for U.S. clients—clear roadmaps, senior engineers, and code you can ship and own."
      />
      <Navbar />
      <Hero />
      
      <div className="bg-gradient-to-tr from-blue-100">
        
        <Features />
        {/* <Prices /> */}
        <CallToAction />
        {/* <Review /> */}
        <Footer />
      </div>
      
      

    </>
    
  )
}
export default Homepage;
