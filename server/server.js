import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import OpenAI from "openai";
import axios from 'axios';

import userData from './data/data.js'
import { searchText, filterByIds } from './utils.js'

dotenv.config()

const openaiApiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
    apiKey: openaiApiKey
});


const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).json(userData)
})

app.post('/', async (req, res) => {
  try {
    const searchQuery = searchText(req.body.prompt)
    const completion = await openai.chat.completions.create({
      messages: [{ 
        role: "system", 
        content: searchQuery
      }],
      model: "gpt-4o-mini-2024-07-18",
    });

    const result = completion.choices[0].message.content

    const data = filterByIds(result, userData)
    
    res.status(200).send(data);
    // res.status(200).send({success: searchQuery});


 
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
    res.status(500).send({ error });
  }

})

app.listen(5000, () => console.log('AI server started on http://localhost:5000'))