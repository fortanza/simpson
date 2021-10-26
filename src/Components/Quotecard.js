import React from "react";
// import "./Quotecard.css";

const QuoteCard = ({props}) => (
  <figure className="QuoteCard">
    <img src={props.image} alt={props.character} />
    <figcaption>
      <blockquote>{props.quote}</blockquote>
      <cite>{props.character}</cite>
    </figcaption>
  </figure>
);

export default QuoteCard;
