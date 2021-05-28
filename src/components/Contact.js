import React from 'react' ;

const Contact =()=>{
    return(
        <div className="Contact">
            <div className="ContactHead">
                <div className="square"></div>
                <h1>Contact Me</h1>
            </div>
            <form>
                <div className="Name">
                    <div className="column">
                        <label>Name <span>*</span></label>
                        <input type="text" required/>
                    </div>

                    <div className="column">
                        <label>Email <span>*</span></label>
                        <input type="text" required/>
                    </div>
                </div>

                <div className="subject">
                    <label className="labelSubject">Subject</label>
                    <input type="text" ></input>
                    <label>Message</label>
                    <textarea rows="5" cols="50"></textarea>
                </div>

                    <div className="button">
                        <button className="btn">Send</button>
                    </div>
            </form>
        </div>
    )
}





export default Contact ;