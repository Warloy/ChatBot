import { Context } from 'telegraf'
import createDebug from 'debug'

const debug = createDebug('bot:start')

export const start = () => async (ctx: Context) => {

  const firstName = ctx.message?.from.first_name ?? ''

  const message = `¡Bienvenido, ${firstName}!\n\nPuedes utilizar el comando /prompt para hacer una solicitud a ChatGPT.\n\nYo me encargaré de traer la respuesta.`

  debug(`Triggered "start" command with message: ${message}`)

  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' })

}