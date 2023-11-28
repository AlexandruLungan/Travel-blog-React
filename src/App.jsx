/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

export default function App() {
  const cardElements = data.map(item => 
    <Card
      key={item.id}    
      item={item}
    />
    )
  return (
    <div className="app">
      <Navbar /> 
      {/* <Card /> */}
      {cardElements}
      <Footer />
      
    </div>
   
  )
}