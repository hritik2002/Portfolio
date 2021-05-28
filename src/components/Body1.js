import React from 'react'
import Profile from './profile.jpg'
import { ExternalLink } from 'react-external-link';
const Body1 = () => {
    return (
        <div className="Body1">
            <div className="fixed"></div>
            <div className="Intro" >
                <img src={Profile} />
                <h2>Hritik Sharma </h2>
                <div className="line"></div>
                <p >Software Engineer</p>
                <div className="contact">
                    <ExternalLink href="https://github.com/hritik2002" ><i class="fa fa-github"></i></ExternalLink>  
                    <ExternalLink href="https://m.facebook.com/hritik.sharma.52090008?ref=bookmarks" ><i className="fa fa-facebook"></i></ExternalLink>     
                    <ExternalLink href="https://www.linkedin.com/in/hritik-sharma-05677b200/" ><i class="fa fa-linkedin"></i></ExternalLink>      
                    <ExternalLink href="https://www.instagram.com/hritik5708/" ><i className="fa fa-instagram"></i></ExternalLink>
                </div>
            </div>
        </div>
    )
}
export default Body1 ;