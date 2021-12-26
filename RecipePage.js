import { useState } from "react";
import recipe from "./RecipeList.js";
import RecipeCard from "./RecipeCard"; 


function RecipePage() {
  console.log("we are in the recipe page")
  const [RecipeList, setRecipeList] = useState(recipe);
  const [search, setSearch] = useState("")
  const [NewRecipe, setNewRecipe] = useState({
    Plat: "",
    Recette: "",
    Ingredient: "",
    Image: "",
    Note: 0,
    Persone: 0,
    Temp: 0,
  });
  
  const handleChange  = ( event ) => {
    const {name, value} =event.target
   setNewRecipe({...NewRecipe,[name]:value})
  }

  const handleSubmit = () => {
  setRecipeList([...RecipeList, NewRecipe])
  setNewRecipe({
    Plat: "",
    Recette: "",
    Ingredient: "",
    Image: "",
    Note: 0,
    Persone: 0,
    Temp: 0,
  }
  )
  
  }
  console.log(NewRecipe)
  return (
    <div className="RecipePage">

      {RecipeList
      .filter((el)=> el.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      .map((recipe) => (
        <RecipeCard recipe={recipe} />
      ))}
      <div>
  
        <div>
          
           <label> Plat : </label>
            <input onChange={handleChange} type="text" name="Plat" />
         </div>
          <div>
            <label>Recette:</label>
            <input onChange={handleChange} type="text" name="Recette" />
          </div>

          <div>
            <label>Ingredient:</label>
            <input onChange={handleChange} type="text" name="Ingredient" />
          </div>
          
          <div> 
           <label> Image :</label>
            <input onChange={handleChange} type="img" name="Image" />
          </div>

          <div> 
           <label> Note:</label>
            <input onChange={handleChange} type="number" name="Note" max={5/5} min={0/5}/>
          </div>

          <div> 
           <label> temps:</label>
            <input onChange={handleChange} type="number" name="Temp" min={1}/>
          </div>

          <div> 
           <label> Persone:</label>
            <input onChange={handleChange} type="number" name="Persone" min={1}/>
          </div>

          <button onClick={handleSubmit}>Rajouter une recette</button>
      </div>
      <div className="shearch">
        Recherche <input onChange={(event)=>setSearch(event.target.value)} value={search}/>
      </div>
    </div>
  );
}

export default RecipePage;
