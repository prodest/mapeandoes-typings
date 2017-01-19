import {IBaseModel} from './ibase-model'
export interface IUser extends IBaseModel {
  name: string
  email: string
  username: string
  password: string
  newPassword?: string
  isAdmin: boolean
}
