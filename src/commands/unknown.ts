import { Context } from 'telegraf'
import createDebug from 'debug'

const debug = createDebug('bot:unknown')

export const unknown = async (ctx: Context, text: string) => {

  const firstName = ctx.message?.from.first_name ?? ''
  const stickerID = process.env.STICKER_POMPOM_NEGATIVE ?? ''
  
  let message = ''

  if (text === `/prompt`) {
    message = `Para usar /prompt, añade tu solicitud seguida del comando, así:\n/prompt <tu solicitud>\n\nPor ejemplo:\n/prompt ¿Por qué las papas fritas se conocen como papas a la francesa?`
  } else {
    message = `${ firstName }, no puedo comprender a qué te refieres con "${text}".`
  }

  debug(`Triggered "unknown" command with message \n${ message } `)

  await ctx.replyWithMarkdownV2(message, {
    parse_mode: 'Markdown'
  })
  
  await ctx.sendSticker(stickerID)

}
