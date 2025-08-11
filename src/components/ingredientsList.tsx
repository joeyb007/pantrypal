type IngredientsListProps = {
    ingredients: string[],
    getRecipe:  React.Dispatch<React.SetStateAction<boolean>>
}

function IngredientsList(props: IngredientsListProps){
    return(
        <section>
                <h2 className='ingredientsOnHand'>Ingredients on hand:</h2>
                <ul>
                    {props.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
                {props.ingredients.length > 3 && <div id='bottomRecipeDiv'>
                    <div>
                        <h3 id='readyForRecipe'>Ready for a recipe?</h3>
                        <p id='generateRecipeParagraph'>Generate a recipe from your list of ingredients</p>
                    </div>
                <button onClick={() => props.getRecipe(prev => !prev)}>Get a recipe</button>
                </div>}
            </section>
    )
}

export default IngredientsList