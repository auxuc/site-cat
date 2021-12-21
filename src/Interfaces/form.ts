import { ICat } from "./cat";

export interface IForm {
  data: ICat
  onSubmit: (data:ICat)=> void
}