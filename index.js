const { GoogleGenAI } = require('@google/genai')
const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const apiKey = process.env.GEMINI_API_KEY

const ai = new GoogleGenAI({ apiKey })

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
  call.on('message', (message) => console.log({ message }))
  call.on('spawn', (spawn) => console.log({ spawn }))
  call.on('error', (err) => console.error(err))
})

wa.initialize()
