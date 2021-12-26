import React from "react";

function RecipeCard(props) {
    const {Plat, Recette, Image, Note, Temp, Persone,Ingredient} = props.recipe
  return (
    <div className="recipe-card" >
     <img classname="Image"src={Image} height="250px" witdh="250px" />
     <h2 className="Plat">{Plat}</h2>
     <img src="etoile.png" height="20px" witdh="20px"/> <h3> {Note}</h3> <img src="horloge.png" height="20px" witdh="20px"/> <img src="avatar.png" height="20px" witdh="20px"/> <h3>{Temp}m</h3> <h3>{Persone}p</h3>
     <p>{Recette}</p>
     <p>{Ingredient}</p>
   </div>
  
  );
}

export default RecipeCard;