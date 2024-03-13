import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import ChatGpt from './components/chatGpt/ChatGpt';
import ChatBot from './components/chatBot/ChatBot';
import GenerateImage from './components/generateImage/GenerateImage';
import TextToSpeech from './components/textToSpeech/TextToSpeech';
import Page404 from './components/page404/Page404';
import Footer from "./components/footer/Footer";
import Contact from './components/contact/Contact';
import About from './components/about/About';

export default function App() {
  return (
    <>
      <Navbar/>
      {/* <div className="container"> */}
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route path="/chatgpt" element={<ChatGpt />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/generateimage" element={<GenerateImage/>}></Route>
          <Route path="/textospeech" element={<TextToSpeech/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/error" element={<Page404/>}></Route>
          <Route path="*" element={<Page404/>}></Route>
        </Routes>
      {/* </div> */}
      <Footer/>
    </>
  )
}
