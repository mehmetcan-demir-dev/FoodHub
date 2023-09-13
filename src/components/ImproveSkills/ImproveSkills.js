import React from "react";
import "./ImproveSkills.scss";

export default function ImproveSkills() {
  const list = [
    "Discover new recipes",
    "Experiment with diverse cuisines",
    "Create your own unique recipes",
    "Build your culinary skills",
    "Master the art of baking",
    "Host themed dinner parties",
  ];

  return (
    <>
      <div className="section improve-skills">
        <div className="col img">
          <img src="../images/gallery/img_10.jpg" alt="" />
        </div>
        <div className="col typography">
          <h1 className="title">Hone your cooking abilities</h1>
          {/* Map through the list and render paragraphs with unique keys and the "skill-items" class */}
          {list.map((item, index) => (
            <p className="skill-items" key={index}>{item}</p>
          ))}
          <button className="btn">COOK, COOK & COOK</button>
        </div>
      </div>
    </>
  );
}
