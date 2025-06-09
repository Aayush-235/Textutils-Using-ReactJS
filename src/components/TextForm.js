import React, { useState } from 'react'
// import TextFormCSS from './TextForm.css';      

export default function TextForm(props) {


    const disabled = () => {
        if (Text.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = Text.toUpperCase();  // Convert the text to uppercase

        setText(newText);  // Update the state variable Text with the new uppercase text
        props.showtAlert("Converted to Uppercase", "success");

    }


    const handleLpClick = () => {
        let newText = Text.toLowerCase();

        setText(newText);
        props.showtAlert("Converted to Lowercase", "success");
    }

    const wordCount = () => {
        let words = Text.split(/\s+/);
        words = words.filter((word) => word.trim().length > 0);
        return words.length;
    }

    const timeforRead = () => {
        let time = Text.split(/\s+/);
        time = time.filter((e) => e.trim().length > 0);
        let totaltime = 0.008 * time.length;
        return totaltime;
    }

    const handleclearclick = () => {


        let newText = ''

        setText(newText);
        props.showtAlert("Textarea Cleared", "success");

    }

    const handletrimclick = () => {

        // let newText = Text.replace(/\s+/g, ' ').trim();
        let newText = Text.split(/\s+/);

        setText(newText.join(" "));
        props.showtAlert("Removed Extra Spaces", "success");
    }

    const countSentences = () => {
        let sentences = Text.split(/[.!?]+/); //return an array
        sentences = sentences.filter((s) => s.trim().length > 0);
        return sentences.length;
    };




    const countParagraph = () => {
        let paragraph = Text.split(/\n+/); //return an array
        paragraph = paragraph.filter((s) => s.trim().length > 0);
        return paragraph.length;
    };

    const reversalText = () => {


        let newText = Text.split("").reverse().join("");

        setText(newText);
        props.showtAlert("Text Reversed", "success");
    }


    const TextCopy = () => {

        let textCopy = document.getElementById("myBox")
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value);
        document.getSelection().removeAllRanges();
        props.showtAlert("Text Copied", "success");
    }


    const handleOnChnage = (event) => {
        // console.log("On change was clicked");
        setText(event.target.value);  // event.target.value is the value of the textarea

    }

    const [Text, setText] = useState("");      // Text is a state variable, setText is a function to update the state variable Text

    // setText = "sdfghjkl";  // This line is incorrect
    // setText("Enter text here 2"); 

    return (
        <>

            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='my-2 mx-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChnage} style={{ backgroundColor: props.mode === 'dark' ? '#13466e ' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                    <button disabled={disabled()} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
                    <button disabled={disabled()} className="btn btn-secondary mx-2 my-2" onClick={handleLpClick}>Convert to Lowercase</button>
                    <button disabled={disabled()} className="btn btn-danger mx-2 my-2" onClick={handleclearclick}>Clear Textarea</button>
                    <button disabled={disabled()} className="btn btn-dark mx-2 my-2" onClick={handletrimclick}>Remove Extra Spaces</button>
                    <button disabled={disabled()} className="btn btn-info mx-2 my-2" onClick={reversalText}>Text Reversal</button>
                    <button disabled={disabled()} className="btn btn-primary mx-2 my-2" onClick={TextCopy}>Copy Text</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summry!!!</h1>
                <p>{wordCount()} words and {Text.length} characters</p>
                <p>{timeforRead()} Minute for read the text</p>
                <p>Sentences Count : {countSentences()}</p>
                <p>Paragraph Count : {countParagraph()}</p>
                <h2>Preview</h2>
                <p className="preview-text">{Text.length > 0 ? Text : "Nothing to preview!"}</p>


            </div>
        </>
    )
}

