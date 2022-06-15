import React,{useState} from 'react';
export default function Textform(props) {
    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleLoClick =()=>{
        //console.log("lowercase was clicked" + text);
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");
    }
    // const handleCamelClick=(text)=>{
    //   let word =text[0].toUpperCase()+text.slice(1).toLowerCase()
    //     //console.log("Camelcase was clicked" + text);
    //     let words=word.split(' ').map(handleCamelClick);
    //     let newText=words.join(' ');
    //     setText(newText);
    // }
  
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("You have cleared your text","success");
    }

    const handleOnChange =(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    } 

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","success");
    }
    const [text, setText] = useState('');
    //text="new text"// wrong way to change the state
    //setText("new text")// Correct way to change the state

  return (
      <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button className=" btn btn-primary " onClick={handleUpClick}>Covert to UpperCase</button>
        <button className=" btn btn-primary ms-3" onClick={handleLoClick}>Covert to LowerCase</button>
        <button className=" btn btn-primary ms-3" onClick={handleClearClick}>Clear Text</button>
        {/* <button className=" btn btn-primary ms-3" onClick={handleCamelClick}>Convert to CamelCase</button> */}
        <button className=" btn btn-primary ms-3" onClick={handleCopy}>Copy Text</button>
        <button className=" btn btn-primary ms-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length-1} Words and {text.length} Character</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
