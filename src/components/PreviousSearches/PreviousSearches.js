import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./PreviousSearches.scss"
export default function PreviousSearches() {
  const searches = [
    "pizza",
    "lahmacun",
    "kebap",
    "hamburger",
    "lasagna",
    "creamy pasta",
    "kelle paca soup",
  ];
  return (
    <>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>
        <div className="previous-searches-container">
          {/* Map through 'searches' array to render search items with animation delay based on 'index' */}

          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.2 + "s" }}
              className="search-items"
            >
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search to c🍅🍎k" />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
}
