import "../styles/ingredientForm.css"

type ingredientFormProps = {
    addIngredient: (formData: FormData) => void | Promise<void>;
}

function IngredientForm(props: ingredientFormProps){
    return(
        <main>
            <form action={props.addIngredient} className='addIngredientForm'>
                <input 
                type='text'
                placeholder='e.g. oregano' 
                aria-label='add ingredient'
                name='ingredient'
                />
                <button type='submit' className='addIngredientButton'>Add Ingredient</button>
            </form>
            
        </main>
    )
}

export default IngredientForm