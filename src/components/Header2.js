import React from 'react'
import { NavLink } from 'react-router-dom';

const Header2 = ()=>{
    return(
        <div className="Header2">
            <NavLink exact activeClassName="active" to="/About">ABOUT ME</NavLink>
            <NavLink exact activeClassName="active" to="/Project">PROJECTS</NavLink>
            <NavLink exact activeClassName="active" to="/Resume">RESUME</NavLink>
            <NavLink exact activeClassName="active" to="/Contact">CONTACT</NavLink>
        </div>
    )
}



export default Header2 ;