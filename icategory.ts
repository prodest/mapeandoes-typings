import { IBaseModel } from './ibase-model'
import { IUser } from './iuser'
export interface ICategory extends IBaseModel {
  name: string,
  travelMode?: ETravelMode,
  issue: boolean,
  iconUrl: string,
  markerColor: string,
  idUser: string,
  user: IUser
}

export enum ETravelMode {
    bicliclet,
    bus,
    car,
    walk
}
