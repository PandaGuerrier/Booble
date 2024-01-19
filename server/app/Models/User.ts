import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public username: string

  // personnals informations
  @column()
  public firstName: string | null // +50pts

  @column()
  public lastName: string | null // +50pts

  @column()
  public birthDate: string | null // +50pts

  @column()
  public town: string | null  // +50pts

  @column()
  public country: string | null // +50pts

  @column()
  public address: string | null   // +50pts

  @column()
  public phoneNumber: string | null // +50pts

  @column()
  public hasAcceptCookies: boolean // +25pts

  @column()
  public hasReadTerms: boolean // +25pts if he doesn't read terms, he can register but difficult to use the app

  @column()
  public hasAcceptTerms: boolean // +15pts

  @column()
  public hasAcceptNewsletter: boolean // +15pts

  @column()
  public hasAcceptPublicity: boolean // +15pts

  @column()
  public cookiesCount: number // +15pt per cookies

  // email verification

  @column()
  public hasReadEmail: boolean // +15pts

  @column()
  public hasAcceptEmail: boolean // +15pts

  @column()
  public isVerified: boolean // +100pts

  @column()
  public verificationToken: string | null

  // other

  @column()
  public points: number // max is 1000pts

  @column()
  public startTime: DateTime | null

  @column()
  public endTime: DateTime | null

  @column()
  public hasFinished: boolean

  @column.dateTime({ autoCreate: true })
  public lastSeen: DateTime

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: false })
  public deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeSave()
  public static async addPoints (user: User) {
    if (user.$dirty.hasAcceptCookies) {
      user.points += 25
    }
    if (user.$dirty.hasReadTerms) {
      user.points += 25
    }
    if (user.$dirty.hasAcceptTerms) {
      user.points += 15
    }
    if (user.$dirty.hasAcceptNewsletter) {
      user.points += 15
    }
    if (user.$dirty.hasAcceptPublicity) {
      user.points += 15
    }
    if (user.$dirty.cookiesCount) {
      user.points += 15
    }
    if (user.$dirty.hasReadEmail) {
      user.points += 15
    }
    if (user.$dirty.hasAcceptEmail) {
      user.points += 15
    }
    if (user.$dirty.isVerified) {
      user.points += 100
    }
    if (user.$dirty.firstName) {
      user.points += 50
    }
    if (user.$dirty.lastName) {
      user.points += 50
    }
    if (user.$dirty.birthDate) {
      user.points += 50
    }
    if (user.$dirty.town) {
      user.points += 50
    }
    if (user.$dirty.country) {
      user.points += 50
    }
    if (user.$dirty.address) {
      user.points += 50
    }
    if (user.$dirty.phoneNumber) {
      user.points += 50
    }
  }
}
