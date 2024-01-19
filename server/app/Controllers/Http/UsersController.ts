import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserValidator from 'App/Validators/UserValidator'
import User from 'App/Models/User'

export default class UsersController {
  public async update({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(UserValidator)
    const user = await User.query().where('id', auth.user!.id).firstOrFail()

    await user.merge(data).save()

    return response.ok({
      status: 200,
      message: "User updated successfully"
    })
  }
}
