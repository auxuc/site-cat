export interface IInput {
  placeholder:string
}
export interface ClassProps {
  wrapperClass?: string
  labelClass?: string
  inputClass?: string
  errorClass?: string
}

export interface InputProps {
  type?: string
  name: string
  labelText?: string
  inputAttr?: object
  classProps?: ClassProps
}

export interface HookForms {
  useFormProps: any
  registerProps?: any
}