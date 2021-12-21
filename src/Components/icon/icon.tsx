import { FC } from 'react'
import { IIcon } from '../../Interfaces/icon'
import useStyles from './styles'

export const IconText: FC<IIcon> = ({ text, IconComponent, action }) => {
  const classes = useStyles()

  return (
    <span className={classes.iconText} onClick={action}>
      <IconComponent className={classes.icon} />
      <span>{text}</span>
    </span>
  )
}
