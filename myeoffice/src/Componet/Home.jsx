import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Home() {
  return (
    <div>
       <div className="hero-section">
      <div className="hero-content">
        <h1>
          Document <span>Management</span> System
        </h1>
        <p>
          Our document management system software is designed to simplify the
          way you manage your documents in the Office. With our solution, you
          can easily access your important documents from anywhere, at any
          time, and on any device.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Log In</button>
          <span>OR</span>
          <button className="btn-secondary">Book Your Demo</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://myeoffice.in/wp-content/uploads/2024/06/kindpng_1247377-1536x880-1.webp" alt="Document Management Illustration" />
      </div>
    </div>
    </div>
  )
}
