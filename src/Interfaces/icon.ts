import { IconType } from 'react-icons'

export interface IIcon {
  text: string
  IconComponent: IconType
  action: ()=>void
}