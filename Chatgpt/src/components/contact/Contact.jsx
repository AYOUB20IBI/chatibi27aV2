import { useEffect, useState } from 'react';
import styleContact from './Contact.module.css'
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
function Contact() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [message,setMessage]=useState('');
    const [loading,setLoading]=useState(false)


    const handelSend=(e)=>{
        e.preventDefault()
        setLoading(true)
        const service_id ='service_0wmq8uw';
        const template_id ='template_vk47j6c';
        const publicKey='oPFC3k0ZEj7O6ahjC';
    
        const templateParams={
          from_name:name,
          subject:subject+" Chat IBI27A",
          from_email:email,
          message:message,
          to_name:'IBIDARNE'
        }
        
        emailjs.send(service_id, template_id, templateParams,publicKey)
        .then((response)=> {
          if(response.status === 200){
            console.log("Email sent Successfuly",response);
            toast.success("Email sent Successfuly")
            setName('');
            setEmail('');
            setMessage('');
            setSubject('')
            setLoading(false)
          }
        }).catch((error)=>{
          console.log('FAILED...', error);
          toast.error('FAILED...')
        })
    }

    useEffect(()=>{
        document.title='Chat IBI27A | Contact'
    },[])
    
    return (
        <>
        <section className="bg-light" id={`${styleContact.section_contact}`} style={{paddingTop:'3rem'}}>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5" style={{
                        fontSize: '3rem',
                        fontWeight: '700',
                        color:' #fff'
                        }}>Contact <span className="text-primary text-uppercase">Chat <i className="fa-solid fa-crosshairs"></i> <span style={{color:'red'}}>IBI27A.</span></span></h1>
                        <hr className="w-50 mx-auto mb-5 mb-xl-9 border-light-subtle" />
                    </div>
                    <div className="row g-4" id={`${styleContact.lesBody}`}>
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase" style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    }}>General</h6>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>ayoubibidarne2@gmail.com</p>
                                </div>
                                <div className="col-md-6">
                                    <h6 className="section-title text-start text-primary text-uppercase" style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    }}>Personal</h6>
                                    <p><i className="fa fa-envelope-open text-primary me-2"></i>ayoubibidarne2@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d212627.712135468!2d-7.56743785576172!3d33.6232550665565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2z2KfZhNiv2KfYsSDYp9mE2KjZiti22KfYoQ!5e0!3m2!1sar!2sma!4v1710341187413!5m2!1sar!2sma" 
                            style={{minHeight: '350px', border:'0',width:'100%'}}  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        </div>
                        <div className="col-md-6">
                            <div className="wow fadeInUp" data-wow-delay="0.2s">
                                <form onSubmit={handelSend} >
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control text-light" id="name" placeholder="Your Name" onChange={(e)=>setName(e.target.value)} style={{background:' #ffffff54'}}/>
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control text-light" id="email" placeholder="Your Email" onChange={(e)=>setEmail(e.target.value)} style={{background:' #ffffff54'}}/>
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control text-light" id="subject" placeholder="Subject"  onChange={(e)=>setSubject(e.target.value)} style={{background:' #ffffff54'}}/>
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control text-light" placeholder="Leave a message here" id="message" onChange={(e)=>setMessage(e.target.value)} style={{height: '150px',background:' #ffffff54'}}></textarea>
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">
                                            {loading === true ? 
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            : <>
                                            <i className="fa-solid fa-paper-plane fa-beat"></i> Send Message
                                            </>
                                            }
                                                
                                            </button>
                                        </div>
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

export default Contact