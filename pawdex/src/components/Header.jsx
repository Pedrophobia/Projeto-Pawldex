import { Link } from "react-router-dom";


export default function Header(){

return(

<header className="header">


<h1>Pawldex</h1>


<nav>

<Link to="/">Inicio</Link>

<Link to="/listagem">
Pawls
</Link>


</nav>


</header>

)

}