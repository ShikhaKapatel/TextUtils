import React, {useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  // Function to handle button click, converting text to uppercase
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked "+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been converted!","success");
  }

  const handleLwClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text has been converted!","success");
  }
  const handleClearClick = () =>{
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been cleared!","sucsess");
  }

  // Function to handle text area changes
  const onChange = (event) =>{
    // console.log("on change");
    setText(event.target.value)
  }
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#102840':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8" onChange={onChange}></textarea>
        </div>
        <button type="button" disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLwClick}>Convert to Lowercase</button>
        <button type="button" disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter Your Text to Preview it here'}</p>
    </div>
    
    </>
  )
}
