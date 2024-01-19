import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    id: schema.number(),
    username: schema.string.optional(),
    firstName: schema.string.optional(),
    lastName: schema.string.optional(),
    birthDate: schema.string.optional(),
    town: schema.string.optional(),
    country: schema.string.optional(),
    address: schema.string.optional(),
    phoneNumber: schema.string.optional(),
    hasAcceptCookies: schema.boolean.optional(),
    hasReadTerms: schema.boolean.optional(),
    hasAcceptTerms: schema.boolean.optional(),
    hasAcceptNewsletter: schema.boolean.optional(),
    hasAcceptPublicity: schema.boolean.optional(),
    cookiesCount: schema.number.optional(),
    hasReadEmail: schema.boolean.optional(),
    isVerified: schema.boolean.optional(),
    verificationToken: schema.string.optional(),
    about: schema.string.optional(),
    status: schema.enum.optional(['online', 'offline', 'away']),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
