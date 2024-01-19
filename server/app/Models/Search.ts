import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Result from 'App/Models/Result'

export default class Search extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public search: string

  @manyToMany(() => Result)
  public results: ManyToMany<typeof Result>

  @column()
  public user_id: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
