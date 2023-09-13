import React from "react";
import CustomImage from "../CustomImage/CustomImage";
import "./HeroSection.scss"
export default function HeroSection() {
  const images = [
    "../images/gallery/img_1.jpg",
    "../images/gallery/img_2.jpg",
    "../images/gallery/img_3.jpg",
    "../images/gallery/img_4.jpg",
    "../images/gallery/img_5.jpg",
    "../images/gallery/img_6.jpg",
    "../images/gallery/img_7.jpg",
    "../images/gallery/img_8.jpg",
    "../images/gallery/img_9.jpg",
];
  return (
    <>
      <div className="section hero">
        <div className="col typography">
          <h1 className="title">What are we doing?</h1>
          <p className="info">
            FoodHub is a location where you can fill your belly and your soul
            with delectable recipes from all around the world, and our service
            is completely free. So <br />
            <span className="slogan">Let's get this party started!</span>
          </p>
          <button className="btn">MEAL, MEAL & MEAL</button>
        </div>
        <div className="col gallery">
        {/* This section is rendering a list of images using the "map" function on the "images" array. */}
          {images.map((src, index) => (
            /* Inside the map function, it's rendering a "CustomImage" component for each image with the following props: */
            <CustomImage key={index} imgSrc={src} pt={"85%"} />
          ))}
        </div>
      </div>
    </>
  );
}
