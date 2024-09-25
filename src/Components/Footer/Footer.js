import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <div>
  <footer className=" custom-footer  py-4 mt-5 footer" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="row">
          {/* Footer Text */}
          <div className="col-12 text-center mb-4">
            <p className="mb-0">
              This page is dedicated to the activities and spiritual work of St. George Youth Association, Chelakkara. 
              Our mission is to support the youth by offering guidance, spiritual growth, and engaging in charitable activities. 
              We strive to uphold the traditions and faith of the Syriac Orthodox Church.
            </p>
          </div>
  
          {/* Footer Links */}
          <div className="col-12 d-flex flex-wrap justify-content-center mb-4 footer-links">
            <Link to="/" className="mx-2 text-dark text-decoration-none">Home</Link>
            <Link to="/activity" className="mx-2 text-dark text-decoration-none">Activity</Link>
            <Link to="/sports" className="mx-2 text-dark text-decoration-none">Sports</Link>
            <Link to="/gallery" className="mx-2 text-dark text-decoration-none">Gallery</Link>
            <Link to="/about" className="mx-2 text-dark text-decoration-none">About</Link>
          </div>
  
          {/* Social Media Icons */}
          <div className="col-12 text-center mb-4">
            <a href="https://www.instagram.com/sgya_chelakkara?igsh=eWc5NW16ZjB2MGk1" className="mx-2 text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/mvN4ww8Fp4Qmv5vb/?mibextid=LQQJ4d" className="mx-2 text-dark" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
  
          {/* Copyright and Website Credit */}
          <div className="col-12 text-center">
            <p className="mb-0">© 2024 St George Youth Association Chelakkara</p>
            <p className="mb-0">Website: <a href="https://www.instagram.com/cloud3.innovative.solutions?igsh=dzR0cTdwMW40dnNq" className="text-dark text-decoration-none" target="_blank" rel="noopener noreferrer">Cloud3 Innovative Solutions</a></p>
          </div>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer
