export interface IUser {
  externalId: string
  name: string
  companyAlias: string
  email: string
  username: string
  password: string
  newPassword?: string
  isAdmin: boolean
}

