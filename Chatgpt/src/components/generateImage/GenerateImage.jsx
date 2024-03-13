

import styleGenerateImage from'./GenerateImage.module.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { saveAs } from 'file-saver';
import toast from 'react-hot-toast';

export default function GenerateImage() {
    const [story, setStory] = useState("");
    const [dataResult, setDataResult] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const backendApi = import.meta.env.VITE_BACKEND_URL;



    const handelGenerate = async (e) => {
        e.preventDefault();

        console.log(story);

        if (story !== '') {
            setError('Please Wait . . .');
            setLoading(true);

            try {
                let body = {
                    prompt: story,
                };

                const response = await axios.post(`${backendApi}/prompt`, body);
                setDataResult(response.data);
                setError("\n");
                setStory('');
            } catch (error) {
                console.error('Error:', error);
                setError('An error occurred while generating the image.');
            } finally {
                setLoading(false);
            }
        } else {
            toast.error('Please Enter Prompt!');
        }
    }

    const downloadImage = () => {
        if (!dataResult) {
            toast.error('No Image Found');
        } else {
          saveAs(dataResult, 'chatIbi27a.png');
        }
    }

    useEffect(()=>{
        document.title='Chat IBI27A | Generate Image'
    },[])

    return (
        <>
          <section id={`${styleGenerateImage.section_login}`}  style={{paddingTop:'7rem',paddingBottom:'6rem'}}>
            <div className='container d-flex justify-content-center align-item-center' >
                <div className={`${styleGenerateImage.form}`}>
                    <form >
                        <div className={`${styleGenerateImage.title}`}>
                            <h3 className="heading mt-5 text-center" style={{ marginBottom: '20px', color: '#fff' }}>
                                <i className="fa-solid fa-face-grin-stars me-2" style={{color:'yellow'}}></i>Hi! Generate an image ?
                            </h3>
                        </div>
                        <div >
                            <textarea onChange={(e)=>setStory(e.target.value)} id={`${styleGenerateImage.textPrompt}`} placeholder='Entre Your Prompt Here' cols="30" rows="10"></textarea>
                        </div>
                        <button className={`${styleGenerateImage.button_submit}`} onClick={handelGenerate} type='submit'>
                            {loading === true ? 
                                    
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                : <span><i className="fa-solid fa-bolt-lightning fa-bounce me-2" style={{color:'yellow'}}></i>Generate</span>
                            }
                        </button>
                    </form>
                    <div className="row mt-4 g-1 px-4 mb-5">
                        {loading ? (
                            <p className='text-center' style={{ fontSize: "2rem", color: 'rgb(177 177 177)' }}>Please Wait...</p>
                        ) : (
                            <>
                            {dataResult && (
                                <img src={`${dataResult}`} alt='' />
                            )}
                            {error && (
                                <p className='text-center' style={{ fontSize: "2rem", color: 'rgb(177 177 177)' }}>{error}</p>
                            )}
                            </>
                        )}
                    </div>
                    <div className="row mt-4 g-1 px-4 mb-5">
                        {dataResult && (
                            <button onClick={downloadImage}><i className="fa-solid fa-cloud-arrow-down me-2"></i>Download</button>
                        )}
                    </div>
                </div>
            </div>
          </section>
          
        </>
    );
}
