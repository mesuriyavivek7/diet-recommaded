import React from "react";
import "./navbar.css";

import {Link} from 'react-router-dom'
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
export default function Navbar() {

  const {user}=useContext(AuthContext)
  return (
    <header>
      <nav className="bg-green-800 h-16 mx-auto flex items-center justify-between px-8">
        <a
          href="/"
          className="text-gray-300 text-lg font-semibold ml-10 logo hover:text-white"
        >
          Nutri Guide
        </a>
        <div className="flex items-center space-x-12 justify-around mr-20 p-11">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          
          <Link to={'/recipe'}>
          <a href="##" className="text-gray-300 hover:text-white">
            Recepies
          </a>
          </Link>

          <Link to={user===null?'/login':'/profile'} >
             <a href="##" className="text-gray-300 hover:text-white">
                 Profile
             </a>
          </Link>

        </div>
      </nav>
    </header>
  );
}
