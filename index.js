const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.post('/api/gptmaker', async (req, res) => {
  const { message } = req.body;

  try {
    const gptResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const reply = gptResponse.data.choices[0].message.content;
    res.json({ response: reply });
  } catch (err) {
    console.error('Erro ao chamar GPT:', err.response?.data || err.message);
    res.status(500).json({ error: 'Erro ao chamar o GPT Maker' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));