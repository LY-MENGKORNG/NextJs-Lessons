import { MouseEventHandler } from "react"

type User = {
  id?: string
  name: string
  email: string
  isActive: boolean
}

export interface CustomBtnProps {
  title: string,
  btnType?: 'button' | 'reset' | 'submit',
  btnStyle?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
}