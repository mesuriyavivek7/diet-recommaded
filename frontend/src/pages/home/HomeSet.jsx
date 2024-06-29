import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Cards from "../../components/cards/Cards";
import Login from "../login/Login";
import Hero from "../../components/Header/hero";
import Recipe from "../recipie/Recipie";

export default function HomeSet() {
  return (
    <div>
      <Recipe></Recipe>
      {/* <Navbar></Navbar>
      <Hero />
      <Cards></Cards>
      <Footer></Footer> */}
    </div>
  );
}
