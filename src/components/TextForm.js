import React, { useState } from 'react'





export default function TextFrom(props) {
    const handleUppClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleExtraSpace = () => {

        let newText = text.replace(/\s+/g, ' ').trim();

        setText(newText)
    }

    const handleTCopyText = () => {
        // console.log(text)
         setText(text)
        navigator.clipboard.writeText(text)
        
    }

    const handleclearClick = () => {
        let newText = ""
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style={{ color: (props.mode === 'dark' ? 'white' : 'black') }} >
                <div className="mb-3">
                    <h1> {props.heading} </h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: (props.mode === 'dark' ? 'gray' : 'white'), color: props.mode === 'dark' ? 'white' : 'black' }}
                        id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-2' onClick={handleUppClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCasse </button>
                <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space </button>
                <button className='btn btn-primary mx-2' onClick={handleTCopyText}>Copy Text </button>
                <button className='btn btn-primary mx-2' onClick={handleclearClick}>Clear </button>

            </div>
            <div className="container m-3" style={{ color: (props.mode === 'dark' ? 'white' : '#042743') }}>
                <h2>Your text Summary is </h2>
                <p> {text.split(" ").length} Words and  {text.length} characters </p>
                <h2> Preview </h2>
                <p>{text.length > 0 ? text : "Enter Something in textbox to Preview it here" }</p>
            </div>
        </>
    )
}