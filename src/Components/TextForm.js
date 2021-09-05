import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("UpperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success")

    } 

    const handleLowClick=()=>{
        // console.log("LowerCase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success")

    } 

    const handleClearClick=()=>{
        // console.log("LowerCase was clicked");
        let newText='';
        setText(newText);
    } 

    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    } 

    const changeText=(event)=>{
        // console.log("on change");
        if(text==="Enter Text Here"){            
            setText('');
            // console.log("function worked")
        }

    }
    const handleRmvSpace=(event)=>{
        // console.log("on change");
        let newText=text.replace(/\s/g,'');
        setText(newText);
        props.showAlert("Spaces Removed", "success")

    }

    const [text, setText] = useState('Enter Text Here');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>   
            <h1>{props.heading}</h1>        
            <div className="mb-3">
                <textarea className="form-control" id="mybox" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows={8} value={text} onClick={changeText}></textarea>
            </div>
            <button className="btn btn-primary mx-1 mb-3" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-1 mb-3" onClick={handleLowClick} >Convert to Lower Case</button>
            <button className="btn btn-primary mx-1 mb-3" onClick={handleClearClick} >Clear</button>
            <button className="btn btn-primary mx-1 mb-3" onClick={handleRmvSpace} >Remove Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your Text Summary</h2>           
            <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p> <b>{0.008 * text.split(" ").length}</b> Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something to Preview Here"}</p>
        </div>
        </>
    )
}
