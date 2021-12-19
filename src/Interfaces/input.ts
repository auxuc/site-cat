export interface IInput {
  placeholder:string
}
export interface InputProps {
  type?: string
  name: string
  labelText?: string
  inputAttr?: object
}

export interface HookForms {
  useFormProps: any
  registerProps?: any
}