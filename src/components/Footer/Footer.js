import React from "react";
import "./Footer.scss";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer container">
        <div className="footer-section">
          <p className="title">Foodhub.com</p>
          <p>
            This is F🍅🍎dHub. This is the only place you can feel Heaven in
            your stomach exist. And our services are completely free. Also
            rating ⭐⭐⭐⭐⭐
            <p>&copy; {currentYear} | All Rights Reserved</p>
          </p>
        </div>
        <div className="footer-section">
          <p className="title">Contact Us</p>
          <p>foodhub@info.com</p>
          <p>+905411234567</p>
          <p>Turgut Ozal Blv. Menemen</p>
        </div>
        <div className="footer-section">
          <p className="title">Socials</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        
      </div>
      
    </>
  );
}
