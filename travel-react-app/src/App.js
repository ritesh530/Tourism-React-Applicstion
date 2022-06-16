
import React from "react";
import Carousei from "./components/Carousei";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Destinations/>
    <Search/>
    <Selects/>
    <Carousei/>
    <Footer/>
    </div>
   
    
    
  );
}

export default App;
