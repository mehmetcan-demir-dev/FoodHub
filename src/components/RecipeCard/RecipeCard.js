import React from "react";
import "./RecipeCard.scss";
import CustomImage from "../CustomImage/CustomImage.js";

export default function RecipeCard({recipe}) {
  return (
    <>
      <div className="recipe-card">
        <CustomImage imgSrc={recipe.img} pt="65%" />
        <div className="recipe-card-info">
          <img className="auther-img" src={recipe.authorImg} alt="" />
          <p className="recipe-title">{recipe.title}</p>
          <p className="recipe">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <a className="recipe-btn" href="#!">View Recipe</a>
        </div>
      </div>
    </>
  );
}
