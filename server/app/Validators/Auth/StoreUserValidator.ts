import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email ' }),
    ]),
    password: schema.string(),
    repeat_password: schema.string({}, [rules.confirmed('password')]),
    username: schema.string(),
  })

  public messages: CustomMessages = {
    'email.email': "L'email doit être valide",
    'email.unique': "L'email est déjà utilisé",
    'repeatPassword.confirmed': 'Les mots de passe ne sont pas identiques',
    'username.unique': "Le nom d'utilisateur est déjà utilisé",
    'password.confirmed': 'Les mots de passe ne sont pas identiques',
    'required': 'Ce champs est requis !',
  }
}
