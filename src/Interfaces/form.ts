import { Dispatch, SetStateAction } from "react";
import { ICat } from "./cat";

export interface IForm {
  data: ICat
  setData: Dispatch<SetStateAction<ICat>>
}