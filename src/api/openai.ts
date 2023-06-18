import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration ({
    apiKey: process.env.OPENAI_TOKEN
})

export const openai = new OpenAIApi(configuration)
