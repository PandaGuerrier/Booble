import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'

export default class SearchesController {
  public async search({ response }: HttpContextContract) {
    //const search = params.id

    const gptResponse = await axios.post(
      'https://api.openai.com/v1/engines/curie/completions',
      {
        data: 'Human',
        max_tokens: 50,
        n: 1,
        stop: '\n',
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`,
        },
      }
    )

    return response.send(gptResponse.data)

    /*const res = await api.sendMessage('Hello World!')
     console.log(res.text)
     response.send(res.text)*/
  }
}
