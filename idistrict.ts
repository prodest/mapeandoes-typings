import {IBaseModel} from './ibase-model'
import {ILocation} from './ilocation'
export interface IDistrict extends IBaseModel {
  name: string
  location: ILocation
}
