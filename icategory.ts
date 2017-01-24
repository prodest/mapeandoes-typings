import { Interfaces } from 'js-data-dao'
import { IUser } from './iuser'
export interface ICategory extends Interfaces.IBaseModel {
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
