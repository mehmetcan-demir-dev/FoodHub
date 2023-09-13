import React from "react";
import PreviousSearches from "../components/PreviousSearches/PreviousSearches";
import RecipeCard from "../components/RecipeCard/RecipeCard";

export default function Recipes() {  
  const recipes = [
    {
      title: "Chicken Pan Pizza",
      img: "/images/gallery/img_1.jpg",
      authorImg: "/images/chiefs/img_1.jpg"
    },
    {
      title: "Spaghetti and Meatballs",
      img: "/images/gallery/img_4.jpg",
      authorImg: "/images/chiefs/img_2.jpg"
    },
    {
      title: "American Cheese Burger",
      img: "/images/gallery/img_5.jpg",
      authorImg: "/images/chiefs/img_3.jpg"
    },
    {
      title: "Mutton Biriyani",
      img: "/images/gallery/img_6.jpg",
      authorImg: "/images/chiefs/img_5.jpg"
    },
    {
      title: "Japanese Sushi",
      img: "/images/gallery/img_10.jpg",
      authorImg: "/images/chiefs/img_6.jpg"
    },
    {
      title: "Raise with Appetizer",
      img: "/images/gallery/img_2.jpg",
      authorImg: "/images/chiefs/img_4.jpg"
    },
    {
      title: "Meat and Fries",
      img: "/images/gallery/img_3.jpg",
      authorImg: "/images/chiefs/img_6.jpg"
    },
    {
      title: "Grill Beaf Steak",
      img: "/images/gallery/img_9.jpg",
      authorImg: "/images/chiefs/img_5.jpg"
    },
    {
      title: "Kelle Paca Soup",
      img: "/images/gallery/kellepaca.jpg",
      authorImg: "/images/chiefs/img_8.jpg"
    },
    {
      title: "Lahmacun",
      img: "/images/gallery/lahmacun.jpg",
      authorImg: "/images/chiefs/img_8.jpg"
    },
    {
      title: "Kebap",
      img: "/images/gallery/kebap.jpg",
      authorImg: "/images/chiefs/img_8.jpg"
    },
    {
      title: "Fried Chicken Baget",
      img: "/images/gallery/img_7.jpg",
      authorImg: "/images/chiefs/img_7.jpg"
    },
    {
      title: "Asian Appetizer",
      img: "/images/gallery/img_8.jpg",
      authorImg: "/images/chiefs/img_4.jpg"
    },
    {
      title: "Creamy Pasta",
      img: "/images/gallery/creamypasta.jpg",
      authorImg: "/images/chiefs/img_7.jpg"
    },
  ].sort(() => Math.random() - 0.5)
  return (
    <>
      <PreviousSearches />
      <div className="recipes-container">
          {/* <RecipeCard /> */}
          {recipes.map((recipe,index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
      </div>
    </>
  );
}
