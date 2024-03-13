
import { useEffect, useState } from 'react'
import styleTextToSpeech from './TextToSpeech.module.css'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import toast from 'react-hot-toast';
import axios from "axios";
export default function TextToSpeech() {
    const [loadingLanguage,setLoadingLanguage]=useState(false)
    const [text,setText]=useState("")
    const [error, setError] = useState("");
    const [dataResult, setDataResult] = useState(null);
    const [speech_language,setSpeech_language]=useState("English")
    const [text_language,setText_language]=useState("English")

    const languageOptions = [
        'None',
        'Afrikaans',
        'Amharic',
        'Armenian',
        'Assamese',
        'Basque',
        'Belarusian',
        'Bengali',
        'Bosnian',
        'Bulgarian',
        'Burmese',
        'Cantonese',
        'Catalan',
        'Cebuano',
        'Central Kurdish',
        'Croatian',
        'Czech',
        'Danish',
        'Dutch',
        'Egyptian Arabic',
        'English',
        'Estonian',
        'Finnish',
        'French',
        'Galician',
        'Ganda',
        'Georgian',
        'German',
        'Greek',
        'Gujarati',
        'Halh Mongolian',
        'Hebrew',
        'Hindi',
        'Hungarian',
        'Icelandic',
        'Igbo',
        'Indonesian',
        'Irish',
        'Italian',
        'Japanese',
        'Javanese',
        'Kannada',
        'Kazakh',
        'Khmer',
        'Korean',
        'Kyrgyz',
        'Lao',
        'Lithuanian',
        'Luo',
        'Macedonian',
        'Maithili',
        'Malayalam',
        'Maltese',
        'Mandarin Chinese',
        'Marathi',
        'Meitei',
        'Modern Standard Arabic',
        'Moroccan Arabic',
        'Nepali',
        'North Azerbaijani',
        'Northern Uzbek',
        'Norwegian Bokmål',
        'Norwegian Nynorsk',
        'Nyanja',
        'Odia',
        'Polish',
        'Portuguese',
        'Punjabi',
        'Romanian',
        'Russian',
        'Serbian',
        'Shona',
        'Sindhi',
        'Slovak',
        'Slovenian',
        'Somali',
        'Southern Pashto',
        'Spanish',
        'Standard Latvian',
        'Standard Malay',
        'Swahili',
        'Swedish',
        'Tagalog',
        'Tajik',
        'Tamil',
        'Telugu',
        'Thai',
        'Turkish',
        'Ukrainian',
        'Urdu',
        'Vietnamese',
        'Welsh',
        'West Central Oromo',
        'Western Persian',
        'Yoruba',
        'Zulu',
    ];


    const SpeechLanguage = [
        'Bengali',
        'Catalan',
        'Czech',
        'Danish',
        'Dutch',
        'English',
        'Estonian',
        'Finnish',
        'French',
        'German',
        'Hindi',
        'Indonesian',
        'Italian',
        'Japanese',
        'Korean',
        'Maltese',
        'Mandarin Chinese',
        'Modern Standard Arabic',
        'Northern Uzbek',
        'Polish',
        'Portuguese',
        'Romanian',
        'Russian',
        'Slovak',
        'Spanish',
        'Swahili',
        'Swedish',
        'Tagalog',
        'Telugu',
        'Thai',
        'Turkish',
        'Ukrainian',
        'Urdu',
        'Vietnamese',
        'Welsh',
        'Western Persian',
    ];
    
    

    const backendApi = import.meta.env.VITE_BACKEND_URL;


    const googletextTobSpeech =async (e)=> {
        e.preventDefault()
        console.log(text);
        if (text !== '') {
            setError('Please Wait . . .');
            setLoadingLanguage(true);

            try {
                let body = {
                    text: text,
                    text_language:text_language,
                    speech_language:speech_language
                };

                const response = await axios.post(`${backendApi}/text/to/speech/prompt`, body);
                console.log(response.data.audio_output);
                setDataResult(response.data.audio_output);
                setError("\n");
                setText('');
            } catch (error) {
                console.error('Error:', error);
                setError('An error occurred while generating the image.');
            } finally {
                setLoadingLanguage(false);
            }
        } else {
            toast.error('Please Enter Text!');
        }
    }

    useEffect(()=>{
        document.title='Chat IBI27A | Text To Speech'
    },[])
    return (
        <>
            <section id={`${styleTextToSpeech.section_login}`}  style={{paddingTop:'7rem',paddingBottom:'6rem'}}>
            <div className='container d-flex justify-content-center align-item-center' >
                <div className={`${styleTextToSpeech.form}`}>
                    <form >
                        <div className={`${styleTextToSpeech.title}`}>
                            <h2 className='text-center'><i className="fa-solid fa-icons me-2" style={{color:'yellow'}}></i>Text To Speech <i style={{color:'yellow'}} className="fa-solid fa-icons "></i></h2>
                        </div>
                        <div className={`${styleTextToSpeech.flex_column}`}>
                            <label className='mb-4 mt-4'>Text </label>
                        </div>
                        <div >
                            <textarea value={text} onChange={(e)=>setText(e.target.value)} id={`${styleTextToSpeech.textSpeech}`} placeholder='Entre Your Text Here' cols="30" rows="10"></textarea>
                        </div>
                        <div className={`${styleTextToSpeech.flex_column}`}>
                            <label className='mb-4 mt-2'>Text Language </label>
                        </div>
                        <FormControl fullWidth style={{background:'#fff',borderRadius:'5px'}}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue="English"
                                onChange={(e)=>setText_language(e.target.value)}
                            >
                                {languageOptions.map((option,index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <div className={`${styleTextToSpeech.flex_column}`}>
                            <label className='mb-4 mt-4'>Speech Language </label>
                        </div>
                        <FormControl fullWidth style={{background:'#fff',borderRadius:'5px'}}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue="English"
                                onChange={(e)=>setSpeech_language(e.target.value)}
                            >
                                {SpeechLanguage.map((option,index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        
                        <button className={`${styleTextToSpeech.button_submit}`} onClick={googletextTobSpeech} type='submit'>
                            {loadingLanguage === true ? 
                                    
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                : <span><i className="fa-solid fa-bolt-lightning fa-bounce me-2" style={{color:'yellow'}}></i>Generate</span>
                            }
                        </button>

                        {loadingLanguage ? (
                            <p className='text-center' style={{ fontSize: "2rem", color: 'rgb(177 177 177)' }}>Please Wait...</p>
                        ) : (
                            <>
                            {dataResult && (
                                <>
                                <div className="container">
                                    <div className="card mt-4" style={{
                                        background:' #f1f3f4',
                                        backdropFilter: 'blur(50px)',
                                        borderRadius: '5px',
                                        borderBottom:' 5px solid #FFEB3B'
                                    }}>
                                        <div className="card-header text-dark"><i className="fa-solid fa-microphone-lines me-2" style={{color:'red'}}></i>Audio Player</div>
                                        <div className="card-body">
                                        <audio controls>
                                            <source
                                            src={dataResult}
                                            type="audio/wav"
                                            />
                                        </audio>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )}
                            {error && (
                                <p className='text-center' style={{ fontSize: "2rem", color: 'rgb(177 177 177)' }}>{error}</p>
                            )}
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}
