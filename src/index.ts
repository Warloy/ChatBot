import { Telegraf } from 'telegraf'
import { VercelRequest, VercelResponse } from '@vercel/node'

import { development, production } from './core'

import { start, prompt, maid, unknown } from './commands'

import { REGEX } from './utils'

const BOT_TOKEN = process.env.BOT_TOKEN ?? ''
const ENVIRONMENT = process.env.NODE_ENV ?? ''

const bot = new Telegraf(BOT_TOKEN)

bot.command('start', start())
bot.command('maid', maid())

bot.on('text', async ctx => {
  const { text } = ctx.message
  
  const match = text.match(REGEX)

  if (match) {
    const command = match[1]
    const message = match[2]

    if (command === 'prompt') {
      await prompt(ctx, message)
    } else {
      await unknown(ctx, command)
    }

  } else {
    await unknown(ctx, text)
  }

})

const isDevelopment = () => {
  if (ENVIRONMENT !== 'production') {
    development(bot).catch(err => console.log('Dev mode error: ', err))
  }
}

export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot)
}

ENVIRONMENT !== 'production' && isDevelopment()