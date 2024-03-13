import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Layout() {
  const container={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }
  const btn={
    display: 'inline-block',
    margin: '10px',
    padding: '10px 20px',
    textDecoration: 'none',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
  useEffect(()=>{
    document.title='Chat IBI27A | Home'
  },[])
  return (
    <>
        <div className="container" style={container}>
            <div style={{textAlign: 'center'}}>
                <Link to="/chatgpt" className="btn btn-danger" style={btn}><i className="fa-solid fa-message"></i> Chat-Gpt</Link>
                <Link to="/chatbot" className="btn btn-info" style={btn}><i className="fa-solid fa-comments"></i> Chat</Link>
            </div>
        </div>
    </>
  )
}
