import { Context } from 'telegraf'
import createDebug from 'debug'

import { request } from '../api'

const debug = createDebug('bot:prompt')

export const prompt = async (ctx: Context, context: string) => {

  const firstName = ctx.message?.from.first_name ?? ''

  let message = ''

  if (!context) {
    message = 'Para usar /prompt, añade tu solicitud seguida del comando, así:\n/prompt <tu solicitud>\n\nPor ejemplo:\n/prompt ¿Qué día es hoy?'
  }

  else {

    const response = await request(context)
    message = `${firstName}, en respuesta a tu solicitud, ChatGPT dice:\n\n${response}`
    
  }

  
  debug(`Triggered "prompt" command with message: ${message}`)

  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' })

}