import { useEffect, useState } from "react";
import stylechatgpt from './ChatGpt.module.css';
import toast from "react-hot-toast";
import { GoogleGenerativeAI } from "@google/generative-ai";
import copy from "copy-to-clipboard";
export default function ChatGpt() {
    const [textchat, setTextChat] = useState(null)
    const [dataresult,setDataResult]=useState([]);
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false)

    const genAI = new GoogleGenerativeAI(
        "AIzaSyA-YKS_t0zkDwCJbrqu4jyioEJBwMwDL34"
    );

    const handelClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        setDataResult([...dataresult,{ text: textchat, type: 'user' },])

        if (textchat !== null) {
            setLoading(true);

            try {
                const model = genAI.getGenerativeModel({ model: "gemini-pro" });
                const prompt=textchat
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                setDataResult([...dataresult, 
                    { text: prompt, type: 'user' },
                    { text: text, type: 'bot' }
                ])
                setError("\n");
                setTextChat(null);

            } catch (error) {
                console.error('Error:', error);
                setError('An error occurred while generating the image.');
            } finally {
                setLoading(false);
            }
        } else {
            toast.error('Please Enter A Message!');
            setError('')
            setLoading(false);
        }
        setLoading(false);
    }

    const CopyTextBot = (text) => {
        let isCopy = copy(text);
        if (isCopy) {
            toast.success("Copied to Clipboard");
        }
    }
    useEffect(()=>{
        document.title='Chat IBI27A | ChatGpt'
    },[])


    return (
        <>
        <section className="container" style={{paddingTop:'7rem',paddingBottom:'5rem'}}>
            <div className={`${stylechatgpt.form}`}>
                <div className="row clearfix">
                    <div className="col-lg-12">
                        <div id={`${stylechatgpt.card}`} className={` card`}>
                            <div className="card-body" style={{overflow:'auto'}}>
                                <ul style={{listStyle: 'none',padding:'0'}}>
                                    {dataresult.map((msg, index) => (

                                    <div key={index}>
                                        {msg.type === 'user' ? (
                                            <>
                                            <li className="clearfix m-2">
                                                <div className="message-data" style={{textAlign: 'end'}}>
                                                    <span className={`${stylechatgpt.message_user_icon}`}  style={{color:'#fff'}}><i className="fa-solid fa-user-secret"></i></span>
                                                </div>
                                                <div id={`${stylechatgpt.my_message}`} className="message my-message "> {msg.text}</div> 
                                            </li><br />
                                            </>
                                        ) : (
                                            <>
                                            <li className="clearfix">
                                                <div className="message-data" style={{textAlign: 'start'}}>
                                                    <span  className={`${stylechatgpt.message_bot_icon}`} ><i className="fa-solid fa-robot"></i></span>
                                                </div>
                                                <div id={`${stylechatgpt.message_bot_text}`} className="message other-message ">{msg.text}</div> 
                                                <div><button id={`${stylechatgpt.btn_copy}`} onClick={() => CopyTextBot(msg.text)}><i className="fa-regular fa-clipboard"></i></button></div>                                   
                                            </li> <br />
                                            </>
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
                            <div className="card-footer">
                                <form >
                                    <div className="input-group mb-0">
                                        <input type="text" value={textchat !==null ? textchat : ''} className="form-control" placeholder="Message Chat-Gpt..." id={`${stylechatgpt.chat}`}  onChange={(e)=>setTextChat(e.target.value)}/>
                                        <button type="submit" id={`${stylechatgpt.btnChat}`}   onClick={handelClick}>
                                            {loading === true ? 
                                        
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                : <span><i className="fa-solid fa-plus"></i></span>
                                            }
                                        </button>        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
