import { Link } from "react-router-dom"
import "./styles/navbar.css"

export const Navbar = ( ) =>{
    return(
        <nav className="container-navbar">
            <h1 className="font-bold text-lg text-color-white logo-nav">User Dashboard</h1>
            <div className="options-nav">
                <Link className="link-nav" to="/">Home</Link>
                <Link className="link-nav" to="/users">Users</Link>
            </div>
        </nav>
    )
}