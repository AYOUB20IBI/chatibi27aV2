// import { Link} from "react-router-dom";
// export default function Navbar() {
//     const linkstyle={color:'#fff'}
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg" style={{background:"black",position: 'fixed',width: '100%',zIndex: '200',}}>
//         <div className="container">
//           <Link className="navbar-brand" to="/" style={linkstyle}>
//             Chat <i className="fa-solid fa-crosshairs"></i> <span style={{color:'red'}}>IBI27A.</span>
//           </Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon" style={linkstyle}><i className="fa-solid fa-bars"></i></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/" style={linkstyle}><i className="fa-solid fa-house me-1"></i> Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/chatbot" style={linkstyle}><i className="fa-solid fa-comments me-1"></i> Chat-Bot</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/chatgpt" style={linkstyle}><i className="fa-solid fa-message me-1"></i> Chat-Gpt</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/generateimage" style={linkstyle}><i className="fa-solid fa-image me-1"></i> Generate Image</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/textospeech" style={linkstyle}><i className="fa-solid fa-microphone-lines me-1"></i> Text To Speech</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }

import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const linkstyle={color:'#fff',    fontWeight: 'bold'}
  return (
    <>
    <nav className={`navbar navbar-expand-lg fixed-top ${style.navbar_back}`} id={`${style.navbar_backv2}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand me-auto" to="/" style={linkstyle}>
                      Chat <i className="fa-solid fa-crosshairs"></i> <span style={{color:'red'}}>IBI27A.</span>
                    </Link>
                    
                    <div className={`offcanvas offcanvas-end `} style={{
                      background:' rgb(103 100 100 / 30%)',
                      border: '1px solid #ffffff42',
                      backdropFilter: 'blur(50px)'
                    }}  tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-between">
                            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">
                              Chat <i className="fa-solid fa-crosshairs"></i> <span style={{color:'red'}}>IBI27A.</span>
                            </h5>
                          
                            <button  type="button" className={`${style.btn_close} text-light`} data-bs-dismiss="offcanvas" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <li className={`list nav-item `}>
                                    <Link className={`nav-link ${style.active} mx-lg-2 ${style.nav_link} text-light`} aria-current="page" to="/">
                                        <i className="fa-solid fa-house"></i> Home
                                    </Link>
                                </li>
                                <li className={`list nav-item`}>
                                    <Link className={`nav-link mx-lg-2 ${style.nav_link} text-light`} to='/chatbot'>
                                      <i className="fa-solid fa-comments me-1"></i> Chat-Bot
                                    </Link>
                                </li>
                                <li className={`list nav-item`}>
                                    <Link className={`nav-link mx-lg-2 ${style.nav_link} text-light`} to="/chatgpt">
                                      <i className="fa-solid fa-message me-1"></i> Chat-Gpt
                                    </Link>
                                </li>
                                <li className={`list nav-item`}>
                                    <Link className={`nav-link mx-lg-2 ${style.nav_link} text-light`} to="/generateimage">
                                      <i className="fa-solid fa-image me-1"></i> Generate Image
                                    </Link>
                                </li>
                                <li className={`list nav-item`}>
                                    <Link className={`nav-link mx-lg-2 ${style.nav_link} text-light`} to="/textospeech">
                                      <i className="fa-solid fa-microphone-lines me-1"></i> Text To Speech
                                    </Link>
                                </li>
                                <li className={`list nav-item`}>
                                    <Link className={`nav-link mx-lg-2 ${style.nav_link} text-light`} to="/about">
                                      <i className="fa-solid fa-circle-info me-1"></i> About Us
                                    </Link>
                                </li>
                                <li className={`list nav-item`}>
                                    <Link className={`nav-link mx-lg-2 ${style.nav_link} text-light`} to="/contact">
                                      <i className="fa-solid fa-envelope-open-text me-1"></i> Contact
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                   
                    <button className={`${style.btn_toggel}`}  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
    </>
  )
}

