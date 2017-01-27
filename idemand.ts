import { ILocation } from './ilocation'
import { IUser } from './iuser'
import { ICategory } from './icategory'
import { ITheme } from './itheme'
import { IDistrict } from './idistrict'
import { ISource } from './isource'
import { IBaseModel } from './ibase-model'
export interface IDemand extends IBaseModel {
  title: string,
  description: string,
  externalUser: {
    id: string,
    name: string
  },
  categoryId: string,
  category: ICategory,
  userId: string
  user: IUser,
  districts: IDistrict[],
  themes: ITheme[],
  source: ISource
  sourceId: string,
  approved: boolean,
  pins: IPin[]
}

export interface IPin {
  location: ILocation,
  description: string
}
