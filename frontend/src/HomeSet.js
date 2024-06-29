import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Cards from "../../components/cards/Cards";
import Login from "../login/Login";

export default function HomeSet() {
    return (
        <div>

            <Navbar></Navbar>
            <Hero />
            <Cards></Cards>
            <Footer></Footer>
        </div>
    );
}