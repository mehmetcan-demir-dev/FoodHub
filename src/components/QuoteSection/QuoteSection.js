import React from "react";
import "./QuoteSection.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
export default function QuoteSection() {
  return (
    <>
      <div className="section quote">
        <p className="quote-text"> <FontAwesomeIcon icon={faQuoteLeft}/>
          Anybody can make you enjoy the first bite of a dish, but only a real
          chef can make you enjoy the last.
        </p>
        <p className="quote-author">- Francois Manot</p>
      </div>
    </>
  );
}
