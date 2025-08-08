import "../styles/ingredientForm.css"
import { useState } from 'react'
function IngredientForm(){
    const [ingredients, setIngredients] = useState<string[]>([])
    
    function addIngredient(formData: FormData){
        const newIngredient = formData.get('ingredient')
        if(typeof newIngredient === "string" && newIngredient !== ''){
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]
        )}
    }

    return(
        <main>
            <form action={addIngredient} className='addIngredientForm'>
                <input 
                type='text'
                placeholder='e.g. oregano' 
                aria-label='add ingredient'
                name='ingredient'
                />
                <button type='submit' className='addIngredientButton'>Add Ingredient</button>
            </form>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
        </main>
    )
}

export default IngredientForm