type IngredientsListProps = {
    ingredients: string[],
    getRecipe:  React.Dispatch<React.SetStateAction<boolean>>
    generatedRecipeSectionRef: React.RefObject<HTMLDivElement | null>
}

function IngredientsList(props: IngredientsListProps){
    return(
        <section>
                <h2 className='ingredientsOnHand'>Ingredients on hand:</h2>
                <ul>
                    {props.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
                {props.ingredients.length > 3 && <div id='bottomRecipeDiv'>
                    <div ref={props.generatedRecipeSectionRef}>
                        <h3 id='readyForRecipe'>Ready for a recipe?</h3>
                        <p id='generateRecipeParagraph'>Generate a recipe from your list of ingredients</p>
                    </div>
                <button onClick={() => props.getRecipe(prev => !prev)}>Get a recipe</button>
                </div>}
            </section>
    )
}

export default IngredientsList