import React from "react";
import "./navbar.css";

export default function Navbar() {
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
          <a href="/recipes" className="text-gray-300 hover:text-white">
            Recepies
          </a>
          <a href="/profile" className="text-gray-300 hover:text-white">
            Profile
          </a>
        </div>
      </nav>
    </header>
  );
}
