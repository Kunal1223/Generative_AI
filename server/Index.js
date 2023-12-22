const dotenv = require('dotenv')
const express = require('express');
const app = express();
const OpenAI = require('openai');
const cors = require('cors');
const { google } = require('googleapis');

dotenv.config({ path: './config.env' });

app.use(express.json());

app.use(cors());
require('./DB/conn');
app.use('/api', require('./router/CreateUs'));

const openai = new OpenAI({
  apiKey: process.env.KEY1, 
});

//This is for the Recipe Request:
app.post('/test', async (req, res) => {
  try {
    const defaultPrompt = "Create a recipe with the following ingredients and instructions:\n\n<b>Recipe Name:[Your Recipe Name Here]</b>\n\n<b>Ingredients:</b> [List of Ingredients]\n\n<b>Instructions:</b>\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n\nFeel free to add any additional details or variations to make the recipe unique!";

    const userQuestion = req.body.qns;

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `${defaultPrompt} ${userQuestion}` }],
      model: 'gpt-3.5-turbo',
    });

    const responseMessage = chatCompletion.choices[0]?.message?.content || 'No response';
    res.status(200).json({ result: responseMessage });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}); 

//This is for the legal Request:
app.post('/legal', async (req, res) => {
  try {
    const defaultPrompt = "Suggest me the Legal Solution for the query i addrss with all IPC Section which comes ander this Case:\n\n<b>Legal Solution For:[Your Case Name Here]</b>\n\n<b>Instructions:</b>\n1.\n2.\n3.\n\nFeel free to add any additional details or variations to make the recipe unique!";

    const userQuestion = req.body.qns;

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `${defaultPrompt} ${userQuestion}` }],
      model: 'gpt-3.5-turbo',
    });

    const responseMessage = chatCompletion.choices[0]?.message?.content || 'No response';
    res.status(200).json({ result: responseMessage });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}); 

// this is use for the google search reasult 
app.get('/google-search', async (req, res) => {
  const query = req.query.q; 
 
  try {  
    const customsearch = google.customsearch('v1');
    const searchResult = await customsearch.cse.list({
      q: query,  
      cx: process.env.GOOGLE_CUSTOM_SEARCH_CX, // Your Custom Search Engine CX
      key: process.env.GOOGLE_API_KEY, // Your Google API Key
    });
   
    res.status(200).json(searchResult.data);
  } catch (error) { 
    console.error('Google Search Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
 

const PORT1 = process.env.PORT;
app.get('/', (req, res) => {
  res.send("I am back with the server page now...");
});

app.listen(PORT1, (req, res) => {
  console.log(`server is connected with the ${PORT1}`);
})

