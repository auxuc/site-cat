export type ILocation = {
  location: string;
  name: string;
  uuid: string;
};
export interface IListLocation {
  [key: string]:ILocation[];
}


export interface IDataLoc {
  data: IListLocation
}

export interface IRoom {
  data: IListLocation
  key: number
}

export interface IResponseDataLoc {
  data: IDataLoc
}