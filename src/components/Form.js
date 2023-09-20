import React, { useState } from "react";

export default function Forum(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to Uppercase ", "success");
  };
  const handleclickclr = () => {
    let newclrText = "";
    setText(newclrText);
    props.showAlert("text has been cleared", "success");
  };
   const handleclickRev = (event) => {
    let RevText = text.split('').reverse().join('');
    setText(RevText);
    props.showAlert("character is reversed ", "success");
  };

  const handleLOclick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lower case ", "success")
  };

  const handleOnChange = (event) => {
   
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" >
        <h1 style={{ color: props.Mode ==="dark"? "white" :"black"}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control" 
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="17" style={{backgroundColor:props.Mode ==="dark"? "grey" :"white", color:props.Mode ==="dark"? "white" :"black" }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>
          convert to Uppercase
        </button>
        <button className="btn btn-primary  mx-2 my-2" onClick={handleLOclick}>
          convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleclickRev}>
          Reverse All Character
        </button>
           <button className="btn btn-primary mx-2  my-2" onClick={handleclickclr}>
          clear All
           </button>
      </div>
      <div className="container" style={{ color: props.Mode ==="dark"? "white" :"black"}}>
        <h1>Your Text Summary </h1>
        <p>
          {" "}
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words {text.length} Characters{" "}
        </p>
        <div>time takes to read {0.008 * text.split(" ").length}</div>
      </div>
      <div className="container" style={{ color: props.Mode ==="dark"? "white" :"black"}}>
        <h2>Preview</h2>
        {text.length > 0 ? text :"enter something above in the box to preview here"}
      </div>
    </>
  );
}
