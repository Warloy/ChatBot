import { Context } from 'telegraf'
import createDebug from 'debug'

const debug = createDebug('bot:start')

export const maid = () => async (ctx: Context) => {

  const firstName = ctx.message?.from.first_name ?? ''

  const message = `No, ${firstName}, no voy a hacer cosplay de maid.`

  debug(`Triggered "maid" command with message: ${message}`)

  await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' })

}