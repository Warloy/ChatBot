import { Telegraf } from 'telegraf'
import { VercelRequest, VercelResponse } from '@vercel/node'

import { development, production } from './core'

import { start } from './commands'

const BOT_TOKEN = process.env.BOT_TOKEN ?? ''
const ENVIRONMENT = process.env.NODE_ENV ?? ''

const bot = new Telegraf(BOT_TOKEN)

bot.command('start', start())

const isDevelopment = () => {
  if (ENVIRONMENT !== 'production') {
    development(bot).catch(err => console.log('Dev mode error: ', err))
  }
}

export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot)
}

ENVIRONMENT !== 'production' && isDevelopment()