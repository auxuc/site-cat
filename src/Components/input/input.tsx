import { ReactElement } from 'react'
import classnames from 'classnames'
import useStyles from './style'
import { HookForms, InputProps } from '../../Interfaces/input'

export const Input = ({
  type = 'text',
  name,
  labelText,
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
      className={classes.inputWrapper}
    >
      <label
        htmlFor={name}
        className={classnames(
          classes.label,
          { [`${classes.error}`]: hasErrors },
        )}
      >
        {labelText ? labelText : name}
      </label>
      <input
        className={classnames(
          { [`${classes.inputError}`]: hasErrors },
          classes.input,
        )}
        id={name}
        name={name}
        type={type}
        {...register(name, registerProps)}
        {...inputAttr}
      />
      {hasErrors && (
        <span className={classes.error}
        > 
          {error}
        </span>
      )} 
    </div>
  )
}
