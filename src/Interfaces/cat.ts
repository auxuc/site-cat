export interface ICat {
  name:string
  breed: string
  age: number
  description: string
  location: string
}

export interface IListCats {
  data:ICat[]
}