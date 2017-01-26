import {IBaseModel} from './ibase-model'
export interface IUser extends IBaseModel {
  externalId: string
  name: string
  companyAlias: string
  email: string
  username: string
  password: string
  newPassword?: string
  isAdmin: boolean
}
