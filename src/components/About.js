import React from 'react'
// import './About.css'
export default function About(props) {

    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    // })

    let mystyle={
        color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? 'rgb(9 60 100)' : 'white',
        border : '2px solid',
        borderColor : props.mode === 'dark ' ? '#042743' : 'white',
       
    }
    // const [BtnText, setBtnText] = useState("Enable dark Mode");

    // const toggleStyle = () => {
    //     if (mystyle.color === 'black') {
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         // setBtnText("Enable light Mode");
    //         props.showtAlert("Dark mode has been enabled for About Us", "success");
    //     } else {
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         // setBtnText("Enable dark Mode");
    //         props.showtAlert("Light mode has been enabled for About Us", "success");
    //     }
    // }

    return (
        <>
            <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor : props.mode === 'dark' ? '#042743' : 'white',}}>
                <h1 className='my-3'>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                Textutils gives you a way to analyze your text quickly and effeciently. Be it Word Count, Character Count, Sentence Count or Preview
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>

                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">

                                Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the of words and characters. Thus it is suitable for writing text with word/ character limit.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={mystyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software works in any web browsers such as Chrome, Firefix, Internet Explorer, Safari, Opera. It suits to conut characters in facebook, blog, books, execl document, pdf document, essays, etc.
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary"> {BtnText}</button>
            </div> */}
            </div>
        </>
    )
}
