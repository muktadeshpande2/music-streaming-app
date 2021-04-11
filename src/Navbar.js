import React from "react";
import {Link} from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
            <nav className="navbar">
                <button type="button" className="button"><b>Search</b></button> 
                <button type="button" className="button"><b>Home</b></button> 
                <Link to='/signin'>
                <button type="button" className="button" ><b>Sign In</b></button>  
                </Link>
            </nav>
        
    )
}

export default Navbar;