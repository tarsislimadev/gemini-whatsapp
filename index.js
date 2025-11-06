const { GoogleGenAI } = require('@google/genai')
const { Client } = require('whatsapp-web.js')
const qrcode = require('qrcode-terminal')

const apiKey = process.env.GEMINI_API_KEY

const ai = new GoogleGenAI({ apiKey })

const model = 'gemini-2.5-flash'

const clients = {}

const wa = new Client()

wa.on('qr', qr => qrcode.generate(qr, { small: true }))

wa.on('ready', () => {
  console.clear()
  console.log('WhatsApp client is ready')
})

wa.on('message_create', async (msg) => {
  if (!msg.text.startsWith('!gemini')) return

  const client = await msg.getChat()

  if (!clients[client.id]) {
    clients[client.id] = await ai.chats.create({ model })
  }

  const message = msg.text.replace('!gemini ', '')

  const response = await clients[client.id].sendMessage({ message })
  msg.reply(response.text)
})

wa.initialize()
