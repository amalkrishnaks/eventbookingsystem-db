import React from "react";
import './footer.css'

const Footer=()=>{
    return(
       
        <div className="foter">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Discover and book amazing events seamlessly. Your go-to platform for exciting experiences.</p>
          </div>
  
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/events">Events</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              
             
            </ul>
          </div>
  
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#" className="social-icon">🔵</a>
              <a href="#" className="social-icon">🟢</a>
              <a href="#" className="social-icon">🔴</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EventBooking. All Rights Reserved.</p>
        </div>
      </div>

       
            

    )
}

export default Footer;