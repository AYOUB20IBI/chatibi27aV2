import { useEffect, useState } from 'react';
import './ChatBot.css';
import axios from 'axios';


const currentDate = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let da = days[currentDate.getDay()];

export default function ChatBot(){
    const [userInput, setUserInput] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);
    const [loading,setLoading]=useState(false)



    const handleSendClick = async(e) => {
        e.preventDefault()
        setLoading(true)

        if (userInput !== null) {
            let body = {
                prompt: {
                    text: userInput,
                },
                temperature: 0.7,
            };
            await axios.post('https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText?key=AIzaSyCXenEgURNkaWqgarYmVAD_iMtBN_ZxvzM', body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                const botResponse = res.data.candidates[0].output;
                setChatMessages([...chatMessages, 
                    { text: userInput, type: 'user' },
                    { text: botResponse, type: 'bot' }
                ]);
                
                setUserInput(null)
            })
            .catch((error) => {
                console.error('Error:', error);
            }).finally(()=>{
                setLoading(false)
            })
        }else{
            alert('Please enter text')
            setLoading(false)
        }
    };
    useEffect(()=>{
        document.title='Chat IBI27A | ChatBot'
    },[])
    return(
        <>
        <section style={{paddingTop:'3rem'}}>
        <div className="container" >
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card chat-app">
                        <div id="plist" className="people-list">
                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                <li className="clearfix active">
                                    <img src={"https://ayoub20ibi.github.io/TIME-2.0/logo.png"} alt="avatar"/>
                                    <div className="about">
                                        <div className="name">Chat Bot <i className="fa-solid fa-robot" style={{color:'#fff'}}></i></div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>                                   
                            </ul>
                        </div>
                        <div className="chat">
                            <div className="chat-header clearfix">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="/" data-toggle="modal" data-target="#view_info" >
                                            <img src={"https://ayoub20ibi.github.io/TIME-2.0/logo.png"} alt='avatar'/>
                                        </a>
                                        <div className="chat-about">
                                            <h6 className="m-b-0">Chat Bot <i className="fa-solid fa-robot" style={{color:'#fff'}}></i></h6>
                                            <small>Last seen: {da}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-history">
                                <ul className="m-b-0">
                                    {chatMessages.map((msg, index) => (

                                    <div key={index}>
                                        {msg.type === 'user' ? (
                                            <>
                                            <li className="clearfix m-2">
                                                <div className="message-data">
                                                    <span className="message-data-time" style={{color:'#fff'}}>You</span>
                                                </div>
                                                <div className="message my-message "> {msg.text}</div>
                                                
                                            </li>
                                            </>
                                        ) : (
                                            <li className="clearfix">
                                                <div className="message-data" style={{textAlign: 'end'}}>
                                                    <span className="message-data-time" style={{color:'#fff'}}>Bot</span>
                                                </div>
                                                <div className="message other-message float-right">{msg.text}</div>                                    
                                            </li> 
                                        )}
                                    </div>
                                    ))}

                                    {loading &&
                                        <li className="clearfix m-2 error-message">
                                            <div className="message my-message">
                                                <span  className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            </div>
                                        </li>
                                    }


                                </ul>
                            </div>
                            <div className="chat-message clearfix">
                                <form>
                                <div className="input-group mb-0">
                                    
                                    <input type="text" className='form-control'   placeholder="Enter text here..." value={userInput !==null ? userInput : ''} onChange={(e) => setUserInput(e.target.value)} style={{outline:'none' ,border:'none'}}/>
                                    <button type='submit' onClick={handleSendClick} style={{    background: '#18191e',color:'#fff'}}>
                                        {loading === true ? 
                                
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            : <span><i className="fa-solid fa-paper-plane"></i></span>
                                        }
                                    </button>
                                    
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}


