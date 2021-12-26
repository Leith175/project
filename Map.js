import RecipeCard from "./RecipeCard";
import recipe from "./RecipeList";

function Recipe(props)
{const {theRecipes}=props;
    return(

        recipe.map((items,key)=>(
            <ul key={key}>
                <RecipeCard theRecipes={items}/>
            </ul>
        ))
    )
}
export default Recipe;