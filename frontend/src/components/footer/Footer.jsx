import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <div>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Home</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">About</a>
            <a href="#" className="text-gray-300 hover:text-white mx-2">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
