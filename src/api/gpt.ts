import { http } from './http'

export const request = async (message: string): Promise<string> => {
  try {
    const response = await http.post('', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a maid working for the master (user)' },
        { role: 'user', content: message },
      ],
      temperature: 0.5
    })
    return response.data.choices[0].message.content
  } catch (error) {
    console.error('Error generating chat prompt:', error)
    throw error
  }
}