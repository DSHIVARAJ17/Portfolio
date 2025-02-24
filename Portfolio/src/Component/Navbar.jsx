import {Link} from "react-router-dom";
import "../CSS/navbar.css";
const Navbar= () =>{
    return(
        <header class="header">
            <nav class="navol">
                <div class="navdiv">
                <Link class="link" to="/Home"><h1>PORTFOLIO</h1></Link> 
                </div>
                <li class="navli">
                <Link class="link" to="/Acheivements"><h1>Acheivements</h1></Link>
                </li>
                <li class="navli">
                <Link class="link" to="/Education"><h1>Education</h1></Link>
                </li>
                <li class="navli">
                <Link class="link" to="/Skills"><h1>Skills</h1></Link>
                </li>
                <li class="navli">
                <Link class="link" to="/Projects"><h1>Projects</h1></Link>
                </li>
            </nav>
        </header>
    )
}
export default Navbar;