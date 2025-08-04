import "../styles/ingredientForm.css"

function IngredientForm(){
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className='addIngredientForm'>
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