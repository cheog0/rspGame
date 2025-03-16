import "./Box.css";
import React from "react";

const imgChoice = {
  rock: {
    name: "Rock",
    img: "https://scienceresourcebox.co.nz/cdn/shop/files/Chalkrounded_WEB_1200x1200.jpg?v=1684441843",
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt022SDebiykh30Q6oQFlKnWWxhIKVusZtew&s",
  },
  paper: {
    name: "Paper",
    img: "https://res.cloudinary.com/env-imgs/images/f_auto/shopimages/products/1200/a4_ivory_card_/.jpg",
  },
};

const Box = ({ name, result, pick }) => {
  return (
    <div className={`box_${result}`}>
      <h1>{name}</h1>
      <img className="item-img" src={imgChoice[pick]?.img} alt={pick} />
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
