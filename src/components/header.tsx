import pantryPal from "../assets/pantryPal.png"
import "../styles/header.css"

function Header(){
    return(
        <header>
            <img src={pantryPal} id='pantryPalLogo'></img>
            <h1 id='pantryPalTitle'>PantryPal.</h1>
        </header>
    )
}

export default Header