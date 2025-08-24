import ReactMarkdown from 'react-markdown'
type AIRecipeProps = {
    recipe: string
}

function AIRecipe(props: AIRecipeProps){
    return (
        <section className="suggested-recipe-container">
            <ReactMarkdown>
            {props.recipe}
            </ReactMarkdown>
        </section>
    )
}

export default AIRecipe