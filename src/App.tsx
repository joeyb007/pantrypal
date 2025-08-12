import './styles/App.css'
import Header from "./components/header.tsx"
import IngredientForm from './components/ingredientForm.tsx'
import AIRecipe from './components/AIRecipe.tsx'
import IngredientsList from './components/ingredientsList.tsx'
import { useState , useRef, useEffect } from 'react'
import {getRecipeFromAI} from './ai.tsx'

function App() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [recipe, setRecipe] = useState('')
    function addIngredient(formData: FormData){
        const newIngredient = formData.get('ingredient')
        if(typeof newIngredient === "string" && newIngredient !== ''){
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]
        )}
    }
    const generatedRecipeSection = useRef<HTMLDivElement | null>(null)
    async function getRecipe(){
      const recipeMarkdown = await getRecipeFromAI(ingredients)
      setRecipe(recipeMarkdown)
    }

  useEffect(()=>{
    if(recipe !== '' && generatedRecipeSection.current !== null){
    generatedRecipeSection.current.scrollIntoView({behavior:'smooth'})
  }
  }, [recipe])
  return (
    <>
      <Header />
      <IngredientForm addIngredient={addIngredient}/>
      { ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe} generatedRecipeSectionRef={generatedRecipeSection}/> }
      {recipe && <AIRecipe recipe={recipe}/>}
      
    </>
  )
}

export default App
