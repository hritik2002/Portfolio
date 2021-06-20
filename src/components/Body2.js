import React from 'react'
import {NavLink} from 'react-router-dom'

const Body2 = () => {
    return (
        <div className="Body2">
            <h1>Hello</h1>
            <div className="btns">
                <NavLink exact to="/Resume"><button className="btn1">RESUME</button></NavLink>
                <NavLink exact to="/Project"><button className="btn2">PROJECTS</button></NavLink>
            </div>
            <p className="p1">Hello, I am Hritik <br /> A first year student at Thadomal Shahani</p>
            <p className="p2">I enjoy building new applications that help solve real world problems.</p>
        </div>
    )
}
export default Body2 ;