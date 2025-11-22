const { GoogleGenAI } = require('@google/genai')
const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const { GEMINI_API_KEY } = process.env

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY })

const model = 'gemini-2.5-flash'

const clients = {}

const wa = new Client({
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }
});

wa.on('qr', qr => {
  console.log('[wa] qr', { qr })
  qrcode.generate(qr, { small: true })
})

wa.on('ready', () => {
  console.log('[wa] ready', {})
  console.log('WhatsApp client is ready')
})

wa.on('message_create', async (msg) => {
  console.log('[wa] message_create', { msg })
  if (!msg.body.startsWith('!gemini')) return

  const client = await msg.getChat()

  if (!clients[client.id]) {
    clients[client.id] = await ai.chats.create({ model })
  }

  const question = msg.body.replace('!gemini ', '')
  const response = await clients[client.id].sendMessage({ message: question })
  const answer = response.text
  msg.reply(answer)
  console.log({ question, answer })
})

wa.on('call', (call) => {
  console.log('[wa] call', call)
  call.on('message', (message) => console.log('[call] message', message))
  call.on('spawn', (spawn) => console.log('[call] spawn', spawn))
  call.on('error', (err) => console.error('[call] error', err))
})

wa.initialize()

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('WhatsApp bot is running.');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
