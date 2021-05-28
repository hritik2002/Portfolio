import React from 'react';
import {ExternalLink} from 'react-external-link';

const Resume = ()=>{
    return(
        <div className="Resume">
            <div className="ResumeHead">
                <div className="square" ></div>
                <h1>Resume</h1>
            </div>
            <div className="Education">
                <div className="CV">
                    <h2>Education</h2>
                    <ExternalLink href="#" target="_self"><button className="btn">DOWNLOAD CV</button></ExternalLink>
                </div>
                <div className="ResumeChild">
                    <div className="Child1">
                        <h3>2021 - 2024</h3>
                        <strong>Thadomal Shahani</strong>
                        <p>Bachelors of Engineering, Computer Science <br />
                            Mumbai , India
                            <br/>
                            <br/>
                            Currently, in first year college.
                        </p>
                    </div>
                    <div className="Child2">
                        <h3>2018 - 2020</h3>
                        <strong>Thakur College</strong>
                        <p>Higher Secondary School,  <br />
                            Mumbai , India
                        </p>
                    </div>
                </div>
            </div>

            <div className="Skill">
                <h2>Technical Skillset</h2>
                <div className="ResumeChild1">
                    <div className="Child3">
                        <div>
                            <div className="square1" ></div>
                            <p>React</p>
                        </div>
                        <div>
                            <div className="square1" ></div>
                            <p>Javascript</p>
                        </div>
                        <div>
                            <div className="square1" ></div>
                            <p>HTML | CSS</p>
                        </div>
                    </div>
                    <div className="Child4">
                    <div>
                            <div className="square1" ></div>
                            <p>C | C++</p>
                        </div>
                        <div>
                            <div className="square1" ></div>
                            <p>Git</p>
                        </div>
                        <div>
                            <div className="square1" ></div>
                            <p>Linux</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume ;