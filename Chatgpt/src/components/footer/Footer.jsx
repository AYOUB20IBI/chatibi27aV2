import { Link } from 'react-router-dom';
import StyleFooter from './StyleFooter.module.css'
function Footer() {
    return (
        <>
        <footer id={StyleFooter.footer} className=" pt-5" style={{background:' #000'}}>
            <div id={StyleFooter.container} className="container">
                
                <div className="row g-4">

                    
                    <div className="col-lg-3">

                            <>
                                <Link to="/" style={{fontSize:'2rem'}}>
                                    Chat <i className="fa-solid fa-crosshairs"></i> <span style={{color:'red'}}>IBI27A.</span>
                                </Link>
                                <p className="my-3 ">Chat IBI27A It is a website about artificial intelligence.</p>
                                <p className="mb-2"><a href="#" className=" text-primary-hover"><i className="fa-solid fa-phone me-2"></i>+212 ** ** ** ** **</a> </p>
                                <p className="mb-0"><a href="#" className=" text-primary-hover"><i className="fa-solid fa-envelope me-2"></i>ayoubibidarne2@gmail.com</a></p>
                            </>
                    </div>
                    

                    
                    <div className="col-lg-8 ms-auto">
                        <div className="row g-4">
                            
                            <div className="col-12 col-md-4">
                                <h5 className="text-white mb-2 mb-md-4">Page</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><Link className="nav-link " to="/about"><i className="fa-solid fa-circle-info me-1"></i>About us</Link></li>
                                    <li className="nav-item"><Link className="nav-link " to="/contact"><i className="fa-solid fa-envelope-open-text me-1"></i>Contact us</Link></li>
                                </ul>
                            </div>

                                            
                            
                            <div className="col-12 col-md-4">
                                <h5 className="text-white mb-2 mb-md-4">Link</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><Link className="nav-link " to="/chatbot"><i className="fa-solid fa-robot me-2"></i>Chat-Bot</Link></li>
                                    <li className="nav-item"><Link className="nav-link " to="/chatgpt"><i className="fa-solid fa-robot me-2"></i>Chat-Gpt</Link></li>
                                    <li className="nav-item"><Link className="nav-link " to="/generateimage"><i className="fa-solid fa-robot me-2"></i>Generate Image</Link></li>
                                    <li className="nav-item"><Link className="nav-link " to="/textospeech"><i className="fa-solid fa-robot me-2"></i>Text To Speech</Link></li>
                                </ul>
                            </div>

                            
                            <div className="col-12 col-md-4">
                                <h5 className="text-white mb-2 mb-md-4">Protection</h5>
                                <ul className="nav flex-column text-primary-hover">
                                    <li className="nav-item"><Link className="nav-link " to="/error"><i className="fa-solid fa-earth-asia me-2"></i>Privacy policy</Link></li>
                                    <li className="nav-item"><Link className="nav-link " to="/error"><i className="fa-solid fa-earth-asia me-2"></i>Terms and conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                

                </div>

                
                <div className="row mt-5">
                    <h5 className="mb-2 text-white">Top Links</h5>
                    <ul className="list-inline text-primary-hover lh-lg">
                        <li className="list-inline-item"><Link className="nav-link " to="/">Home</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/about">About us</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/contact">Contact us</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/chatbot">Chat-Bot</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/chatgpt">Chat-Gpt</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/generateimage">Generate Image</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/textospeech">Text To Speech</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/error">Privacy policy</Link></li>
                        <li className="list-inline-item"><Link className="nav-link " to="/error">Terms and conditions</Link></li>
                    </ul>
                </div>

                
                <div className="row g-4 justify-content-between mt-0 mt-md-2">

                    
                    <div className="col-sm-7 col-md-6 col-lg-4">
                    </div>

                    
                    <div className="col-sm-5 col-md-6 col-lg-3 text-sm-end">
                        <h5 className="text-white mb-2">Follow us on</h5>
                        <ul className="list-inline mb-0 mt-3">
                                <>
                                    <li className="list-inline-item"> <Link className="btn btn-sm px-2 bg-facebook mb-0" to="https://github.com/AYOUB20IBI"><i className="fa-brands fa-github"></i></Link> </li>
                                    <li className="list-inline-item"> <Link className="btn btn-sm shadow px-2 bg-instagram mb-0" to="https://www.instagram.com/ibi27a/"><i className="fab fa-fw fa-instagram"></i></Link> </li>
                                    <li className="list-inline-item"> <Link className="btn btn-sm shadow px-2 bg-twitter mb-0" to="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></Link> </li>
                                    <li className="list-inline-item"> <Link className="btn btn-sm shadow px-2 bg-linkedin mb-0" to="https://t.me/ibi27abot"><i className="fa-brands fa-telegram"></i></Link> </li>
                                </>
                        </ul>	
                    </div>
                </div>

                
                <hr className="mt-4 mb-0"/>

                
                <div className="row">
                    <div className="container">
                        <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
                            
                            <div className=" text-light"> Copyrights ©2023 A.Ibidarne. Build by <Link href="https://ibidarne-ayoub.vercel.app/" className="">Ibi27a</Link>. </div>
                            
                            <div className="nav mt-2 mt-lg-0">
                                <ul className="list-inline text-primary-hover mx-auto mb-0">
                                    <li className="list-inline-item me-0"><Link className="nav-link  py-1" to="/error">Privacy policy</Link></li>
                                    <li className="list-inline-item me-0"><Link className="nav-link  py-1" to="/error">Terms and conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}

export default Footer;

