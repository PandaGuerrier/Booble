import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/Auth/LoginValidator'
import StoreUserValidator from 'App/Validators/Auth/StoreUserValidator'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const payload = await request.validate(StoreUserValidator)
    const user = await User.create(payload)

    return response.created({
      message: 'User created successfully',
      data: user,
    })
  }

  public async login({ auth, request, response }: HttpContextContract) {
    const { email, password, rememberMe } = await request.validate(LoginValidator)

    try {
      const user = await auth.attempt(email.toString(), password.toString(), rememberMe)
      return response.ok({
        status: 200,
        user: user
      })
    } catch (e) {
      return response.ok({
        status: 400,
        message: "Utilisateur pas trouvé !"
      })
    }


  }

  public async logout({ auth, response }: HttpContextContract) {
    await auth.logout()
    return response.ok({
      message: 'Logout successfully',
    })
  }

  public async me({ auth, response }: HttpContextContract) {
    const user = auth.use('web')

    return response.ok({
      // @ts-ignore
      data: user.user,
    })
  }
}
