import React from 'react';
import { ExternalLink } from 'react-external-link';
import project1 from './project1.jpg'
import project2 from './project2.png'


const Project = ()=>{
    return (
        <div className="Project">

            <div className="Head" >
                <div className="block">
                    <div className="square" ></div>
                    <h1>Projects</h1>
                </div>
                <p>Check out some of my projects down below!</p>
            </div>

            <div className="projectChild">
                <div className="BoldLine"></div>
                <div className="first">
                    <div className="firstHead">
                        <h2>Github Clone</h2>
                        <ExternalLink href="https://github.com/hritik2002/Webdev_Task_Github"><button className="btn">Check It Out!</button></ExternalLink>
                    </div>

                    <div className="Descr">
                        <h4>Description</h4>
                        <p>It is my first ever project , that I made in my first semester of my 
                            college
                        </p>
                    </div>

                    <div className="Tech">
                        <h4>Technology</h4>
                        <p>HTML , CSS , JAVASCRIPT</p>
                    </div>
                </div>

                <div className="second">
                    <img src={project1} />
                </div>
            </div>
            <div className="projectChild">
                <div className="BoldLine"></div>
                <div className="first">
                    <div className="firstHead">
                        <h2>Calculator</h2>
                        <ExternalLink href="https://github.com/hritik2002/Simple-Calculator"><button className="btn">Check It Out!</button></ExternalLink>
                    </div>

                    <div className="Descr">
                        <h4>Description</h4>
                        <p>This project is a simple calulator, that taught me insights of Javascript language.
                        </p>
                    </div>

                    <div className="Tech">
                        <h4>Technology</h4>
                        <p>HTML , CSS , JAVASCRIPT</p>
                    </div>
                </div>

                <div className="second">
                    <img src={project2} />
                </div>
            </div>
        </div>
    )
}

export default Project;