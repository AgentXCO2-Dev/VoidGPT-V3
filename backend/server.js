const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message required' });
  }

  try {
    // AI provider connection will be added here
    // Keep API keys on the server, never in frontend code

    res.json({
      response: `VoidGPT received: ${message}`,
      status: 'API foundation online'
    });
  } catch (error) {
    res.status(500).json({ error: 'AI request failed' });
  }
});

app.listen(3000, () => {
  console.log('VoidGPT V3 backend running on port 3000');
});
