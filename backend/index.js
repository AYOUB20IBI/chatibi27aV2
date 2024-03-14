import express from "express";
import cors from "cors";
// import { OpenAI } from "openai";
import dotenv from "dotenv";
import axios from "axios";
import Replicate from "replicate";
dotenv.config();
app.use(
  cors({
    origin: "*",
  })
);
const replicate = new Replicate({
  auth: 'r8_NYJzVG7Tbe73Vyc53KJcm53x2XPRLt31ABrrC',
});


const app = express();
const port = process.env.PORT || 8000;

// app.use(cors()); 
app.use(express.json()); 

app.get('/getData', async (req, res) => {
    res.send('hello world');
});


app.post('/prompt',async(req,res)=>{
  try {
    const output = await replicate.run(
      "ai-forever/kandinsky-2.2:ea1addaab376f4dc227f5368bbd8eff901820fd1cc14ed8cad63b29249e9d463",
      {
        input: {
          width: 1024,
          height: 1024,
          prompt:req.body.prompt,
          num_outputs: 1,
          num_inference_steps: 75,
          num_inference_steps_prior: 25
        }
      }
    );
    console.log(output);
    res.json(output)
    
  } catch (error) {
    console.log('Error forwarding prediction request: ' + error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

//text to speech
app.post('/text/to/speech/prompt',async(req,res)=>{
  try {
    const output = await replicate.run(
      "cjwbw/seamless_communication:668a4fec05a887143e5fe8d45df25ec4c794dd43169b9a11562309b2d45873b0",
      {
        input: {
          task_name: "T2ST (Text to Speech translation)",
          input_text: req.body.text,
          input_text_language: req.body.text_language,
          max_input_audio_length: 60,
          target_language_with_speech: req.body.speech_language
        }
      }
    );
    console.log(output);
    res.json(output)
    
  } catch (error) {
    console.log('Error forwarding prediction request: ' + error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})







app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
