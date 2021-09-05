import React from 'react'

export default function About(props) {

    return (
        
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
            <h1 className="text-decoration-underline">
                <strong>About Us</strong>
            </h1>
            <div className="my-3" id="aboutInfo" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h2>This is a text utility app</h2> 
            </div>
        </div>

    )
}
