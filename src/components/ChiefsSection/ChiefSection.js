import React from "react";
import "./ChiefSection.scss";
import ChiefCard from "../ChiefCard/ChiefCard";
export default function ChiefsSection() {
  const chiefs = [
    {
      name: "Juan Carlos",
      img: "../images/chiefs/img_1.jpg",
      recipesCount: "10",
      cuisine: "Mexican",
    },
    {
      name: "John Doe",
      img: "../images/chiefs/img_2.jpg",
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Erich Maria",
      img: "../images/chiefs/img_3.jpg",
      recipesCount: "13",
      cuisine: "Italian",
    },
    {
      name: "Chris Brown",
      img: "../images/chiefs/img_4.jpg",
      recipesCount: "08",
      cuisine: "American",
    },
    {
      name: "Blake Lively",
      img: "../images/chiefs/img_5.jpg",
      recipesCount: "09",
      cuisine: "French",
    },
    {
      name: "Ben Affleck",
      img: "../images/chiefs/img_6.jpg",
      recipesCount: "04",
      cuisine: "Indian",
    },
    {
        name: "James Cook",
        img: "../images/chiefs/img_7.jpg",
        recipesCount: "007",
        cuisine: "Greek",
      },
      {
        name: "Mr. Demir",
        img: "../images/chiefs/img_8.jpg",
        recipesCount: "11",
        cuisine: "Turkish",
      },
  ];

  return (
    <>
      <div className="section chiefs">
        <h1 className="title">Our Top Chiefs</h1>
        <div className="top-chiefs-container">
          {chiefs.map((chief) => (
            <ChiefCard key={chief.name} chief={chief} />
          ))}
        </div>
      </div>
    </>
  );
}
