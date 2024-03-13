import { useEffect } from 'react';
import imageEroor from '../../asset/images/error.svg'
import { Link } from 'react-router-dom';
export default function Page404() {
  useEffect(()=>{
    document.title='Chat IBI27A | 404'
},[])
  return (
    <section style={{paddingTop:'7rem',paddingBottom:'3rem'}}>
        <div className="container text-light">
            <div className="row align-items-center">
                <div className="col-md-10 text-center mx-auto">
                    <img src={imageEroor} className="h-lg-500px mb-4" alt=""/>
                    <h1 className="display-1 text-primary mb-0">404</h1>
                    <h2>Oh no, something went wrong!</h2>
                    <p className="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
                    <Link to="/" className="btn btn-light mb-0">Take me to Homepage</Link>
                </div>
            </div>
        </div>
    </section>
  )
}
