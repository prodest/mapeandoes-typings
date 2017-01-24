import { Interfaces } from 'js-data-dao'
import {ILocation} from './ilocation'
export interface IDistrict extends Interfaces.IBaseModel {
  name: string
  location: ILocation
}
