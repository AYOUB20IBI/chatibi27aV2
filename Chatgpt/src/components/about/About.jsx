import { useEffect } from 'react'
import image1 from '../../asset/images/image1.jpeg'
import image2 from '../../asset/images/image2.jpeg'
import image3 from '../../asset/images/image3.jpeg'
import image4 from '../../asset/images/image4.jpeg'
import styleAbout from './About.module.css'
import { Link } from 'react-router-dom';
export default function About() {
    useEffect(()=>{
        document.title='Chat IBI27A | About'
    },[])
  return (
    <>
        <section id={`${styleAbout.section}`}  style={{paddingTop:'5rem'}}>
            <div className="container-xxl py-5" >
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6" id={`${styleAbout.section_one}`}>
                            <h6 className={`${styleAbout.section_title} text-start text-primary text-uppercase`}>About Us <span className={`${styleAbout.ligne_About}`}></span></h6>
                                <>
                                    <h1 className="mb-4"style={{
                                        fontSize: '1.8rem',
                                        fontWeight: '700',
                                        color:' #000000'
                                    }}>Welcome to <span className="text-primary text-uppercase">Chat <i className="fa-solid fa-crosshairs"></i> <span style={{color:'red'}}>IBI27A.</span></span></h1>
                                    <p className="mb-4">
                                      I am a Full-Stack developer based in Casablanca, Morocco, 
                                      currently working as a Full Stack intern. I am deeply passionate 
                                      about enhancing my coding skills and developing websites. I specialize 
                                      in building WebApps and websites using the MERN Stack. I am dedicated 
                                      to self-improvement and constantly work on enhancing my skills. 
                                      Building Full-Stack clones is a particular area of interest for me.</p>
                                </>
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="/contact">Contact <i className="fa-solid fa-chevron-right"></i></Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3" id={`${styleAbout.section_images}`}>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src={image2} style={{marginTop: '25%'}}/>
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src={image3}/>
                                </div>
                                <div className="col-6 text-end">
                                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src={image4}/>
                                </div>
                                <div className="col-6 text-start">
                                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src={image1}/>
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
