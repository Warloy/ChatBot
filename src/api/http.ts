import axios from 'axios'

export const BASE_URL = process.env.OPENAI_API_URL ?? ''
const OPENAI_TOKEN = process.env.OPENAI_TOKEN ?? ''

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_TOKEN}`
  }
})
