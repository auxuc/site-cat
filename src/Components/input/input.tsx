import { ReactElement } from 'react'
import classnames from 'classnames'
import useStyles from './input.style'
import { HookForms, InputProps } from '../../Interfaces/input'

export const Input = ({
  type = 'text',
  name,
  labelText,
  classProps,
  useFormProps: { formState, register },
  registerProps,
  inputAttr,
}: InputProps & HookForms): ReactElement => {
  const hasErrors = formState?.errors?.[name] || false
  let error = ''
  if (hasErrors) {
    error = formState?.errors?.[name].message || ''
  }
  const classes = useStyles()

  return (
    <div
      className={classnames(
        { [`${classProps?.wrapperClass}`]: !!classProps?.wrapperClass },
        classes.inputWrapper,
      )}
    >
      <label
        htmlFor={name}
        className={classnames(
          classes.label,
          { [`${classes.messageError}`]: hasErrors },
          { [`${classProps?.labelClass}`]: !!classProps?.labelClass },
        )}
      >
        {labelText ? labelText : name}
      </label>
      <input
        className={classnames(
          { [`${classes.inputError}`]: hasErrors },
          { [`${classProps?.inputClass}`]: !!classProps?.inputClass },
          classes.input,
        )}
        id={name}
        name={name}
        type={type}
        {...register(name, registerProps)}
        {...inputAttr}
      />
      {hasErrors && (
        <span
          className={classnames(classes.error, classes.messageError, {
            [`${classProps?.errorClass}`]: !!classProps?.errorClass,
          })}
        >
          {error}
        </span>
      )}
    </div>
  )
}
