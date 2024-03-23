import React from 'react'
import style from '../img_icons/style.module.scss'

interface Img_iconProps {
  icon: string
}

export default function Img_icon({ icon }: Img_iconProps) {
  return (
    <img className={style.store_icons}
      src={icon}
    ></img>
  )
}
