import React from "react";
import Ingredient from "./Ingredient";
import StarRating from "./StarRating";

export default function IngredientsList({ list }) {
  return (
    <>
      <StarRating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={(e) => alert("double click")}
      />
      <ul className="ingredients">
        {list.map((ingredient, i) => (
          <Ingredient key={i} {...ingredient} />
        ))}
      </ul>
    </>
  );
}
