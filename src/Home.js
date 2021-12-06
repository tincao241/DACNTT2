import React, { useState, useEffect } from "react";
import Card from "./components/Cards/Card.jsx";
import Charts from "./components/Charts/Charts.jsx";
import Country from "./components/CountryPicker/Country.jsx";
import styles from "./Home.module.css";



const Home = () => {


  return (
    
    <div className="container">
      <div>
        <Card />
      </div>
      <div >
        <Charts />
      </div>
     
      
      
    </div>
  );
}

export default Home;
