import { Context } from 'telegraf'
import createDebug from 'debug'

const debug = createDebug('bot:prompt')

export const prompt = async (ctx: Context, context: string) => {

  const firstName = ctx.message?.from.first_name ?? ''

  let message = ''

  if (!context) {
    message = 'Para usar /prompt, añade tu solicitud seguida del comando, así:\n/prompt <tu solicitud>\n\nPor ejemplo:\n/prompt ¿Qué día es hoy?'
  }

  else {

    

    message = `Esta es la respuesta a tu solicitud, ${firstName}:\n\n${context}`
    
  }

  
  debug(`Triggered "prompt" command with message: ${message}`)

  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' })

}