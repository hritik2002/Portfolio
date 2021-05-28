import React from 'react'
import {ExternalLink} from 'react-external-link'
 const Footer2 = () => {
    return (
        <div className="Footer2">
            <p>Follow</p>
            <div className="footer-contact" >
                <ExternalLink href="https://github.com/hritik2002" ><i class="fa fa-github"></i></ExternalLink>  
                <ExternalLink href="https://m.facebook.com/hritik.sharma.52090008?ref=bookmarks" ><i className="fa fa-facebook"></i></ExternalLink>     
                <ExternalLink href="https://www.linkedin.com/in/hritik-sharma-05677b200/" ><i class="fa fa-linkedin"></i></ExternalLink>      
                <ExternalLink href="https://www.instagram.com/hritik5708/" ><i className="fa fa-instagram"></i></ExternalLink>       
            </div> 
        </div>
    )
}

export default Footer2 ;