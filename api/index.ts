import { VercelRequest, VercelResponse } from '@vercel/node'
import { startVercel } from '../'

const handler = async (req: VercelRequest, res: VercelResponse) => {
  try {
    await startVercel(req, res)
  } catch (error: any) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Server Error</h1><p>Sorry, there was a problem...</p>')
    console.error(error?.message)
  }
}

export default handler