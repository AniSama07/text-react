import React, { useState } from 'react'

export default function TextForm(props) {
  const handleClick = () => {
    console.log("clicked ig" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showMsg("converted to upper", "success")
  }
  const handleLoClick = () => {
    console.log("clicked ig" + text)
    let newText = text.toLocaleLowerCase();
    setText(newText)
  }
  const handleClear = () => {
    let newText = "";
    setText(newText)
  }
  const handleReplaceClick = () => {
    console.log("clicked rep" + text)
    let newText = text.replaceAll("a", "an");
    setText(newText)
  }
  const handleChange = (event) => {
    console.log("clicked ig")
    setText(event.target.value)
  }


  const [text, setText] = useState('');
  return (
    <>
      <div className="mb-3 my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <textarea value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="type" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className={`btn btn-${props.btn} my-3`} onClick={handleClick} >uppercase</button>
        <button className={`btn btn-${props.btn} my-3 mx-3`} onClick={handleLoClick} >Lowecase</button>
        <button className={`btn btn-${props.btn} my-3`}  onClick={handleReplaceClick} >replace</button>
        <button className={`btn btn-${props.btn} my-3 mx-3`} onClick={handleClear} >clear</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black' }}>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>

    </>
  )
}

